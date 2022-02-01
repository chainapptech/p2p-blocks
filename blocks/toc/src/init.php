<?php
/**
 * Blocks Initializer
 * @package NicheTable
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//Main Style for Front end
if ( ! function_exists( 'ppm_toc_main_style_for_front' ) ) {
	function ppm_toc_main_style_for_front() {
		wp_register_style(
			'ppm-toc-maincss-front', // Handle.
			PPM_PLG_URL.'blocks/toc/build/style-index.css', // Block style CSS.
			is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
			time() // Version: File modification time.
		);
		wp_enqueue_style( 'ppm-toc-maincss-front' );

		wp_register_script(
			'ppm-toc-frontend-block-js', // Handle.
			PPM_PLG_URL.'blocks/toc/assets/js/frontend.js', // Block.build.js: We register the block here. Built with Webpack.
			array( 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-polyfill', 'wp-primitives' ), // Dependencies, defined above.
			null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
			true // Enqueue the script in the footer.
		);

		wp_enqueue_script( 'ppm-toc-frontend-block-js' );
	}


	// Register style sheet.
	add_action( 'wp_enqueue_scripts', 'ppm_toc_main_style_for_front' );
}


//Main Style for Editor
if ( ! function_exists( 'ppm_toc_main_style_for_editor' ) ) {
	function ppm_toc_main_style_for_editor() {
			wp_enqueue_style(
					'ppm-toc-maincss-editor',
					PPM_PLG_URL.'blocks/toc/build/index.css',
					[],
					1
			);
			
	}
	add_action( 'enqueue_block_editor_assets', 'ppm_toc_main_style_for_editor' );
}

if ( ! function_exists( 'ppm_toc_backend_style_for_editor' ) ) {
	function ppm_toc_backend_style_for_editor() {
		wp_register_style(
				'ppm-toc-maincss-front', // Handle.
				PPM_PLG_URL.'blocks/toc/build/style-index.css', // Block style CSS.
				is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
				time() // Version: File modification time.
			);
		wp_enqueue_style( 'ppm-toc-maincss-front' );
	}
	add_action( 'enqueue_block_editor_assets', 'ppm_toc_backend_style_for_editor' );
}
/**
 * Enqueue assets for backend editor
 */
function ppm_toc_blocks_editor_assets() {

	// Register block editor script for backend.
	wp_enqueue_script(
		'ppm-toc-cgb-block-js',
		PPM_PLG_URL.'blocks/toc/build/index.js',
		array( 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-polyfill', 'wp-primitives' ),
		1,
		true
	);
	wp_enqueue_script(
		'ppm-toc-backend-block-js', // Handle.
			PPM_PLG_URL.'blocks/toc/assets/js/frontend.js', // Block.build.js: We register the block here. Built with Webpack.
			array( 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-polyfill', 'wp-primitives' ), // Dependencies, defined above.
			null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
			true // Enqueue the script in the footer.
		);


}
add_action( 'enqueue_block_editor_assets', 'ppm_toc_blocks_editor_assets' );

/**
 * Enqueue Gutenberg block assets for both frontend + backend.=============================================
 */

function ppm_toc_cgb_block_assets() { // phpcs:ignore
	if ( function_exists('has_blocks') ) {
		/**
		 * Register Gutenberg block on server-side.
		 *
		 * Register the block on server-side to ensure that the block
		 * scripts and styles for both frontend and backend are
		 * enqueued when the editor loads.
		 *
		 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
		 * @since 1.16.0
		 */
		register_block_type(
			'ppmcb/toc', array(
				'script' => "ppm-toc-frontend-block-js",
				'style'  => 'ppm-toc-maincss-front',
				// Enqueue blocks.build.js in the editor only.
				'editor_script' => 'ppm-toc-cgb-block-js',
				// Enqueue blocks.editor.build.css in the editor only.
				'editor_style'  => 'ppm-toc-maincss-editor'

			)
		);
	}else {
		add_action( 'admin_notices', 'PPM_CLASS::ppmcb_admin_notice_require_gutenberg' );
		return;
	}
}

// Hook: Block assets.
add_action( 'init', 'ppm_toc_cgb_block_assets' );