<?php
/**
 * Plugin Name:       PPM Custom blocks
 * Description:       Create custom blocks for Gutenberg.
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Sabri Bouchaala 
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ppm-custom-blocks
 */

defined( 'ABSPATH' ) || exit;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class PPM_CLASS {
    static $config = array();
    private static $_instance = null;
	function __construct() {
	 	add_action( 'init', array( $this, 'constants' ), 0 );
        add_action( 'init', array( $this, 'load_localisation' ), 0 );
        add_filter( 'render_block', array( $this,'ppmcb_render_block' ), 10, 2 );
        add_action( 'init', array( $this, 'ppmcb_block_init' ), 0 );
        add_filter( 'block_categories', array($this,'ppmcb_custom_category') );
        add_shortcode('ppm_stars_shortcode', array($this,'ppm_stars_shortcode') );
		add_shortcode( 'ppm_action_button_shortcode', array($this,'ppm_action_button_shortcode' ) );
		add_shortcode( 'ppm_header_shortcode', array($this,'ppm_header_shortcode' ) );
        add_action( 'wp_enqueue_scripts', array($this,'ppm_scripts' ));
    	add_action('acf/init', array($this,'acf_agencies_table_block'));
    }
    public function acf_agencies_table_block() {
	
		// check function exists
		if( function_exists('acf_register_block') ) {
			
			// register a portfolio item block
			
			acf_register_block(array(
				'name'				=> 'agencies-table',
				'title'				=> __('Agencies table'),
				'description'		=> __('Agencies table block.'),
				'render_template'	=> PPM_DIR_PATH . "blocks/agencies-table/agencies-table.php",
				'enqueue_style' => PPM_PLG_URL. '/assets/css/agencies-table.css',
				'enqueue_script' => PPM_PLG_URL. '/assets/js/agencies-table.js',
				'category'			=> 'ppmcb-blocks',
				'icon'				=> 'excerpt-view',
				'keywords'			=> array( 'Agencies table' ),
			));
		}
	}
	
	function ppm_scripts() {
		wp_enqueue_style('ppm-style',
			PPM_PLG_URL. '/assets/css/style.css',
			[],
			1
		);
		wp_register_style( 'ppm-font-awesome', PPM_PLG_URL. '/assets/css/font-awesome.min.css'  );
    	wp_enqueue_style( 'ppm-font-awesome' );
	}

	function ppm_action_button_shortcode( $atts ) {
	       extract( shortcode_atts(
	               array(
	                       'color' => 'blue',
	                       'title' => 'Title',
	                       'url' => ''
	               ),
	               $atts
	       ));
	       return '<a  href="' . $url . '" class="ppm-action-button '.$color.'-button"><span>' . $title . '</span></a>';
	}

	function ppm_header_shortcode( $atts ) {
	       extract( shortcode_atts(
	               array(
	                       'tag' => 'h2',
	                       'title' => 'Title',
	               ),
	               $atts
	       ));
	       return '<'.$tag.' class="ppm-header-tag"><span>' . $title . '</span></'.$tag.'>';
	}

 
    function ppm_stars_shortcode($atts){
    	extract(shortcode_atts(
	        array(
	    	    'score' => '4.9'
	    ), $atts));
	    $stars= 0;
	    $score = floatval($score);
	    if( $number )
	    	$stars = floor($score);
	    $html = "";

	    for ( $i= 1;$i<= 5;$i++) {
	    	$class = ' empty';
	    	if( $i <= floor($score) ){
	    		$html .= "<div class='ppm_star ppm_star_".$i."'><i class='fas fa-star'></i></div>";
	    	}else{
	    		if( $score < $i && $score > $i-1 ){
	    			$html .= "<div class='ppm_star ppm_star_".$i."'><i class='fas fa-star-half-alt'></i></div>";
	    		}
	    	}
	    	
	    }
	    return "<div class='ppm_stars_container'>".$html."<div class='ppm_stars_note'>".$score."</div></div>";
	}

    public function constants(){
    	
    	define( 'PPM_DIR_PATH', plugin_dir_path( __FILE__ ) );
		define( 'PPM_PLG_URL', plugin_dir_url( __FILE__ ) );
    }
    public function load_localisation (){
        global $layers_customizer_controls;
        load_plugin_textdomain( 'hatrating', false, basename( dirname( __FILE__ ) ) . '/languages' );
    } // End load_localisation()
	public function ppmcb_block_init() {
		$block_folders = array(
			//'pros-cons',
			'agency-snapshot',
			'new-quote',
			//'comparison-table',
			'summary',
			'toc'
		);
		foreach ( $block_folders as $block_folder ) {
			if( file_exists(PPM_DIR_PATH.'blocks/'.$block_folder.'/src/init.php') )
				require_once PPM_DIR_PATH.'blocks/'.$block_folder.'/src/init.php';
			else
				register_block_type( PPM_DIR_PATH . 'blocks/'.$block_folder.'/');
		}
	}

	/**
	 * Notice for Gutenberg Not found.
	 */
	public static function ppmcb_admin_notice_require_gutenberg() {
		if ( isset( $_GET['activate'] ) ) {
			unset( $_GET['activate'] );
		}

		$message = sprintf(
			/* translators: 1: Plugin name 2: Gutenberg 3. Gutenberg Plugin URL */
			esc_html__( '%1$s requires %2$s You can update your WordPress or install %3$s.', 'ppm-custom-blocks' ),
			'<strong>' . esc_html__( 'Pros & Cons,New Quote,Summary', 'ppm-custom-blocks' ) . '</strong>',
			'<strong>' . esc_html__( 'Gutenberg Editor', 'ppm-custom-blocks' ) . '</strong>.<br><br>',
			'<a target="_blank" rel="noopener" href="https://wordpress.org/plugins/gutenberg/">' . esc_html__( 'Gutenberg Editor', 'ppm-custom-blocks' ) . '</a>'
		);

		printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );
	}

	public function ppmcb_render_block( $block_content, $block ) {
		$attrs = $block['attrs'];
		if ( $block['blockName'] === 'ppmcb/new-quote' ) {
			$block_content = str_replace( 'wp-block-quote', 'wp-block-quote wp-block-new-quote', $block_content );
		}
		if ( $block['blockName'] === 'ppmcb/summary' ) {
			//echo '<pre>';var_export($block);echo '</pre>';
			$block_content = '<div class="wp-block-summary">'.$block_content.'</div>';
		}
		if ( $block['blockName'] === 'ppmcb/toc' ) {
			
			$content = $block_content;

			$data = array(
				'anchors' => isset( $attrs['anchorsByTags'] ) ? implode( ',', $attrs['anchorsByTags'] ) : 'h2,h3,h4,h5,h6',
				'include' => isset( $attrs['includeContainer'] ) ? $attrs['includeContainer'] : null,
				'exclude' => isset( $attrs['excludeContainer'] ) ? $attrs['excludeContainer'] : null,
				'collapsable' => isset( $attrs['collapsable'] ) && ! $attrs['collapsable'] ? 'false' : 'true',
				'offset' => isset( $attrs['extraOffset'] ) ? $attrs['extraOffset'] : null,
			);

			$attr_string = '';

			foreach ( $data as $key => $value ) {
				if ( is_null( $value ) ) {
					continue;
				}
				$attr_string .= "data-$key='$value' ";
			}

			preg_match( '/ class="wp-block-ideabox-toc.*?/', $content, $matches );

			if ( ! empty( $matches ) ) {
				$content = str_replace( $matches[0], $matches[0] . ' ib-block-toc', $content );

				preg_match( '/ class="wp-block-ideabox-toc.*?"/', $content, $matches );

				$content = str_replace( $matches[0], $matches[0] . ' ' . $attr_string, $content );
			} else {
				$content = '<div class="ib-block-toc"' . $attr_string . '>';
				$content .= $block_content;
				$content .= '</div>';
			}

	        return $content;
	    }

		return $block_content;
	}


	/**
	 * Creates new `PPM Custom Blocks` block category.
	 */
	public function ppmcb_custom_category( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => isset( $attributes['enableTitle'] ) ? $attributes['enableTitle'] : 'ppmcb-blocks',
					'title' => isset( $attributes['enableTitle'] ) ? $attributes['enableTitle'] : __( 'PPM Custom Blocks', 'ppm-custom-blocks' ),
				),
			)
		);
	}

}
// Initiation call of plugin

$ppm = new PPM_CLASS(__FILE__);