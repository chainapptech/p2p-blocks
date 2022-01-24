/**
 * BLOCK: new-quote
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
const { RichText, InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker } = wp.components;


registerBlockType( 'ppmcb/new-quote', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'New Quote' ), // Block title.
	icon: 'editor-quote', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'ppmcb-blocks',
	keywords: [
		__( 'new quote' ),
		__( 'quote' )
	],
	attributes: {
        RichAuthor: {
            type: 'string',
            selector: 'div.authorquote-wrapper'
        },
        RichCitation: {
            type: 'string',
            source: 'html',
            selector: 'p.citationtext-wrapper'
        },
        StyleColor: {
            type: 'string',
            default: '#EC573D'
        }
    },
	edit: ( props ) => {
		const { attributes, setAttributes } = props;
        var contentAuthor = props.attributes.content;
        var content = props.attributes.content2;
        var StyleColor = props.attributes.StyleColor;
        var background_style = {};
        if (StyleColor != undefined) {
            background_style = {background: StyleColor};
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
	            <div className="wp-block-ppmcb-edit-new-quote">
	            	<div class="wp-block-ppmcb-edit-new-quote-prefix" style={background_style}></div>
	                <div className="wp-block-ppmcb-edit-new-quote-inner">
	                	<blockquote>
		                	<RichText
		                        tagName="p"
		                        placeholder="Write your citation here"
		                        value={attributes.RichCitation}
		                        onChange={(newtext) => setAttributes({ RichCitation: newtext })}
		                        className="citationtext-wrapper"
		                    />
		                </blockquote>
	                    <RichText 
	                        tagName="div"
	                        placeholder="Write the author here"
	                        value={attributes.RichAuthor}
	                        onChange={(newtext) => setAttributes({ RichAuthor: newtext })}
	                        className="authorquote-wrapper"
	                    />
	                    
	                </div>
	                <div class="wp-block-ppmcb-edit-new-quote-suffix" style={background_style}></div>
	            </div>
	        </div>
        );
},
    save: (props) => { 
        const { attributes,ClassName } = props;
        var contentAuthor = props.attributes.RichAuthor;
        var contentCitation = props.attributes.RichCitation;
        var StyleColor = props.attributes.StyleColor;
        var background_style = {};
        if (StyleColor != undefined) {
            background_style = {background: StyleColor};
        }
        return (
            <div className="wp-block-ppmcb-new-quote">
            	<div class="wp-block-ppmcb-new-quote-prefix" style={background_style}></div>
                <div className="wp-block-ppmcb-new-quote-inner">
                	<blockquote>
	                    <RichText.Content 
	                        tagName="p"
	                        value={contentCitation}
	                        className="citationtext-wrapper"
	                    />
	                </blockquote>
                    <RichText.Content 
                        tagName="div"
                        value={contentAuthor}
                        className="authorquote-wrapper"
                    />
                </div>
                <div class="wp-block-ppmcb-new-quote-suffix" style={background_style}></div>
            </div>
        );
    }
} );
