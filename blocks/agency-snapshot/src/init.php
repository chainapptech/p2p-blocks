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
if ( ! function_exists( 'agency_snapshot_main_style_for_front' ) ) {
	function agency_snapshot_main_style_for_front() {
		wp_register_style(
			'agency-snapshot-nichetablewpwp-maincss-front', // Handle.
			plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
			is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
			time() // Version: File modification time.
		);
		wp_enqueue_style( 'agency-snapshot-nichetablewpwp-maincss-front' );
	}
	// Register style sheet.
	add_action( 'wp_enqueue_scripts', 'agency_snapshot_main_style_for_front' );
}


//Main Style for Editor
if ( ! function_exists( 'agency_snapshot_main_style_for_editor' ) ) {
	function agency_snapshot_main_style_for_editor() {
			wp_enqueue_style(
					'agency-snapshot-nichetablewpwp-maincss-editor',
					plugins_url( '/dist/blocks.style.build.css', dirname( __FILE__ ) ),
					[],
					1
			);
	}
	add_action( 'enqueue_block_editor_assets', 'agency_snapshot_main_style_for_editor' );
} 

/**
 * Enqueue assets for backend editor
 */
function nichetablewpwp_agency_snapshot_blocks_editor_assets() {

	// Register block editor script for backend.
	wp_enqueue_script(
		'nichetablewpwp-agency-snapshot-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ),
		1,
		true
	);

	// Register block editor styles for backend.
	wp_enqueue_style(
		'nichetablewpwp-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		1
	);


	// For table demo inporter: Pass in REST URL.
	wp_localize_script(
		'nichetablewpwp-agency-snapshot-cgb-block-js',
		'nichetablewpwp_agency_snapshot_globals',
		array(
			'rest_url' => esc_url( rest_url() ),
		)
	);
}
add_action( 'enqueue_block_editor_assets', 'nichetablewpwp_agency_snapshot_blocks_editor_assets' );

/**
 * Enqueue Gutenberg block assets for both frontend + backend.=============================================
 */

function new_agency_snapshot_cgb_block_assets() { // phpcs:ignore
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
			'ppmcb/agency-snapshot', array(
				// Enqueue blocks.style.build.css on both frontend & backend.
				'style'         => 'new_agency_snapshot-cgb-style-css',
				// Enqueue blocks.build.js in the editor only.
				'editor_script' => 'new_agency_snapshot-cgb-block-js',
				// Enqueue blocks.editor.build.css in the editor only.
				'editor_style'  => 'new_agency_snapshot-cgb-block-editor-css',
			)
		);
	}else {
		add_action( 'admin_notices', 'PPM_CLASS::ppmcb_admin_notice_require_gutenberg' );
		return;
	}
}

// Hook: Block assets.
add_action( 'init', 'new_agency_snapshot_cgb_block_assets' );