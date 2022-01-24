/**
 * BLOCK: summary
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
const { RichText, InspectorControls, PanelColorSettings, withColors,ColorPalette } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker } = wp.components;
 
registerBlockType('ppmcb/summary', {
    title: 'Summary',
    category: 'ppmcb-blocks',
    icon: 'text',
    description: 'Summary block',
    keywords: ['summary'],
    attributes: {
        RichHeading: {
            type: 'string',
            selector: 'h4.summaryheader-wrapper'
        },
        RichText: {
            type: 'string',
            source: 'html',
            selector: 'p.summarytext-wrapper'
        },
        StyleColor: {
            type: 'string',
            default: '#EC573D'
        }
    },
    edit: (props) => { 
        const { attributes,setAttributes } = props;
        var contentH = props.attributes.content;
        var content = props.attributes.content2;
        var StyleColor = props.attributes.StyleColor;
        var border_style = {};
        if (StyleColor != undefined) {
            border_style = {borderColor: StyleColor};
        }
        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title="Most awesome settings ever"
                        initialOpen={true}
                    >

                        <PanelRow>
                            <ColorPicker
                                color={attributes.StyleColor}
                                onChangeComplete={(newval) => setAttributes({ StyleColor: newval.hex })}
                                disableAlpha
                            />
                        </PanelRow>

                    </PanelBody>
                </InspectorControls>
                <div className="wp-block-ppmcb-edit-summary">
                    <div className="wp-block-ppmcb-edit-summary-inner" style={border_style}>
                        <RichText 
                            tagName="h4"
                            placeholder="Write your heading here"
                            value={attributes.RichHeading}
                            onChange={(newtext) => setAttributes({ RichHeading: newtext })}
                            className="summaryheader-wrapper"
                        />
                        <RichText
                            tagName="p"
                            placeholder="Write your paragraph here"
                            value={attributes.RichText}
                            onChange={(newtext) => setAttributes({ RichText: newtext })}
                            className="summarytext-wrapper"
                        />
                    </div>
                </div>
            </div>
        );
    },
    save: (props) => { 
        const { attributes } = props;
        var StyleColor = props.attributes.StyleColor;
        var border_style = {};
        if (StyleColor != undefined) {
            border_style = {borderColor: StyleColor};
        }
        var contentH = props.attributes.RichHeading;
        var contentT = props.attributes.RichText;
        return (
            <div className="wp-block-ppmcb-summary">
                <div className="wp-block-ppmcb-summary-inner" style={border_style}>
                    <RichText.Content 
                        tagName="h4"
                        value={contentH}
                        className="summaryheader-wrapper"
                    />
                    <RichText.Content 
                        tagName="p"
                        value={contentT}
                        className="summarytext-wrapper"
                    />
                </div>
            </div>
        );
    }
});