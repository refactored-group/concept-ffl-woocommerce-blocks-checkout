<?php
/*
Plugin Name: Custom Checkout Block
Description: Adds a custom block to WooCommerce checkout.
Version: 1.0.0
*/
function register_custom_checkout_block() {
    if (!function_exists('register_block_type')) {
        return;
    }
    wp_register_script(
        'your-custom-block-editor',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );
    wp_register_script(
        'your-custom-block-frontend',
        plugins_url('build/frontend.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wc-blocks-checkout'],
        filemtime(plugin_dir_path(__FILE__) . 'build/frontend.js')
    );
    register_block_type('your-namespace/custom-checkout-block', [
        'editor_script' => 'your-custom-block-editor',
        'script' => 'your-custom-block-frontend'
    ]);
}
add_action('init', 'register_custom_checkout_block');
