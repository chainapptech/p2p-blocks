function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * BLOCK: Niche Table
 * Main table
 */

/** Dependencies and Components **/
import Edit from "./components/edit";
import "./editor.scss";
import "./style.scss";

/** WordPress dependencies **/
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


var attributes = {
  tableStyle: {
    type: "string"
  },
  nthrColor: {
    type: "string"
  },
  borderColor: {
    type: "string",
    default: "#f1f1f1"
  },
  block_id: {
    type: "string"
  },
  rHoverEffect: {
    type: "boolean"
  },
  tableShadow: {
    type: "boolean"
  },
  tableTh1: {
    type: "string",
    default: ""
  },
  tableTh2: {
    type: "string",
    default: ""
  },
  tableTh3: {
    type: "string",
    default: ""
  },
  tableTh4: {
    type: "string",
    default: ""
  },
  tableTh5: {
    type: "string",
    default: ""
  },
  tableTh6: {
    type: "string",
    default: ""
  },
  tableTh7: _defineProperty({
    type: "string",
    default: ""
  }, "default", ""),
  tableTh8: {
    type: "string",
    default: ""
  },
  tableTh9: {
    type: "string",
    default: ""
  },
  textAlignIn: {
    type: "string",
    default: "text_left"
  },
  verticalAlign: {
    type: "string",
    default: ""
  }
  /** Register advanced columns block **/
};registerBlockType("nichetablewpwp/niche-table", {
  title: __("Niche Table", "nichetablewpwp"), // title
  icon: { src: wp.element.createElement(
      "svg",
      { width: "16", height: "16", "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "table", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "class": "svg-inline" },
      wp.element.createElement("path", { fill: "currentColor", d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z", "class": "" })
    ), background: "#f9f9f9" },
  category: "nichetablewpwp", // category
  keywords: [__("Niche Tablele", "nichetablewpwp"), __("niche row", "nichetablewpwp"), __("nichetablewpwp", "nichetablewpwp"), __("table", "nichetablewpwp")],
  supports: {
    html: false,
    className: false
  },
  attributes: attributes,

  /* Edit */
  edit: function edit(props) {
    return wp.element.createElement(Edit, props);
  },

  /* Save the block markup. */
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var tableShadow = attributes.tableShadow,
        rHoverEffect = attributes.rHoverEffect,
        nthrColor = attributes.nthrColor,
        borderColor = attributes.borderColor,
        verticalAlign = attributes.verticalAlign,
        tableStyle = attributes.tableStyle,
        block_id = attributes.block_id,
        tableTh1 = attributes.tableTh1,
        tableTh2 = attributes.tableTh2,
        tableTh3 = attributes.tableTh3,
        tableTh4 = attributes.tableTh4,
        tableTh5 = attributes.tableTh5,
        tableTh6 = attributes.tableTh6,
        tableTh7 = attributes.tableTh7,
        tableTh8 = attributes.tableTh8,
        tableTh9 = attributes.tableTh9,
        textAlignIn = attributes.textAlignIn;

    var blockClassName = ["niche_table", "ms_enable ", !textAlignIn ? "" : textAlignIn, !verticalAlign ? "" : verticalAlign, tableStyle ? tableStyle : null, rHoverEffect ? "tr-hover-effect" : null, tableShadow ? "table-shadow" : null].filter(Boolean).join(" ");

    return wp.element.createElement(
      "div",
      null,
      wp.element.createElement(
        "table",
        {
          id: "nichetablewpwp-" + block_id,
          className: blockClassName,
          width: "100%"
        },
        wp.element.createElement(InnerBlocks.Content, null)
      ),
      wp.element.createElement(
        "style",
        null,
        " @media only screen and (max-width: 768px){ #nichetablewpwp-" + block_id + " td:nth-of-type(1):before{ content: '" + tableTh1 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(2):before{ content: '" + tableTh2 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(3):before{ content: '" + tableTh3 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(4):before{ content: '" + tableTh4 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(5):before{ content: '" + tableTh5 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(6):before{ content: '" + tableTh6 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(7):before{ content: '" + tableTh7 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(8):before{ content: '" + tableTh8 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(9):before{ content: '" + tableTh9 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(9):before{ content: '" + tableTh9 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(9):before{ content: '" + tableTh9 + "'; } #nichetablewpwp-" + block_id + " td:nth-of-type(9):before{ content: '" + tableTh9 + "'; } } @media only screen and (min-width: 768px){ .niche_table, .niche_table th, .niche_table td, .niche_table tr{ border-color: " + borderColor + " !important; } .niche_table tr:nth-child(odd){background-color:" + nthrColor + " !important;} } "
      )
    );
  }
});


//////////////////
// WEBPACK FOOTER
// ./src/niche-table/table/index.js
// module id = 54
// module chunks = 0