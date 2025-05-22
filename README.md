# Concept FFL Checkout Block

This repository contains a proof of concept for upgrading the FFL extension to contain a block to be used with the WooCommerce Blocks-Based checkout.

## How to use this repository

1. Clone this repository into the directory wordpress/wp-content/plugins/
2. Run `npm install` to install the dependencies from package.json
3. Run `npm run build`
4. Go to the WordPress admin > Plugins > All and enable "FFL Custom Checkout Block"
5. Add the block to the checkout by editing the Cart page. See more details [here](https://razoyo.atlassian.net/wiki/spaces/FBPP/pages/3910500353/WooCommerce+Block-Based+Checkout) 

## Creating a distro for this extension

To distribute this extension to other users, you need to zip the build directory. Users can install this plugin normally in WordPress by going to Plugins > Add Plugin and uploading the zip file.

After activating the plugin, a new block will be added to the blocks panel inside the Cart page.

<img width="1431" alt="image" src="https://github.com/user-attachments/assets/fa115aff-29c4-440a-b9da-2160044e4767" />

