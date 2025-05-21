import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType('razoyo/ffl-custom-checkout-block', {
    apiVersion: 2,
    title: 'FFL Custom Checkout Block',
    category: 'woocommerce',
    attributes: {
        fieldValue: {
            type: 'string',
            default: ''
        }
    },
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();
        return (
            <div {...blockProps}>
                <TextControl
                    label="FFL TEST BLOCK"
                    value={attributes.fieldValue}
                    onChange={(value) => setAttributes({ fieldValue: value })}
                />
            </div>
        );
    },
    save: () => null
});
