<?php
/**
 * Novo Flow Theme Functions
 *
 * @package NovoFlow
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue styles and scripts.
 */
function novoflow_enqueue_assets() {
	wp_enqueue_style( 'novoflow-style', get_stylesheet_uri(), array(), '1.0.0' );
	wp_enqueue_script( 'novoflow-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'novoflow_enqueue_assets' );

/**
 * Theme setup.
 */
function novoflow_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
	add_theme_support( 'custom-logo' );

	register_nav_menus( array(
		'primary' => __( 'Menu Principal', 'novoflow' ),
	) );
}
add_action( 'after_setup_theme', 'novoflow_setup' );

/**
 * Remove unnecessary WordPress head items for performance.
 */
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'rsd_link' );
