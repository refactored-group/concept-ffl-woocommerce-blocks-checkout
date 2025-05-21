import { registerBlockType } from '@wordpress/blocks';
import { ValidatedTextInput } from '@woocommerce/blocks-checkout';
import { useBlockProps } from '@wordpress/block-editor';

const { registerBlockType } = wp.blocks;
const { ValidatedTextInput } = wc.blocksCheckout;

registerBlockType('razoyo/ffl-checkout-block', {
    apiVersion: 2,
    edit: () => null, // This is handled in index.js
    save: () => null,
    frontend: ({ attributes }) => {
        const blockProps = useBlockProps();
        return (
            <div {...blockProps}>
                <ValidatedTextInput
                    id="ffl-checkout"
                    type="text"
                    label="FFL CUSTOM CHECKOUT BLOCK"
                    value={attributes.fieldValue}
                    required={false}
                />
            </div>
        );
    }
});
