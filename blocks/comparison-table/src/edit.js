var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * Edit Component for edit function
 *
 **/

/** External dependencies. **/
import Inspector from "./inspector";
import classnames from 'classnames';

/** WordPress dependencies **/
var __ = wp.i18n.__;
var Component = wp.element.Component;
var InnerBlocks = wp.blockEditor.InnerBlocks;

/* Set allowed blocks and media. */

var ALLOWED_BLOCKS = ["nichetablewpwp/tablerow"];

// ##### Edit Class #####

var Edit = function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    _classCallCheck(this, Edit);

    return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // block_id in the attribute.
      this.props.setAttributes({ block_id: this.props.clientId });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          attributes = _props.attributes,
          className = _props.className;
      var block_id = attributes.block_id;

      /* Gutenburg Option and editor return 
      ========================================*/

      var nthrColor = attributes.nthrColor,
          borderColor = attributes.borderColor,
          textAlignIn = attributes.textAlignIn,
          verticalAlign = attributes.verticalAlign,
          tableStyle = attributes.tableStyle;

      var blockClassName = ["table_wrap", !textAlignIn ? "" : textAlignIn, !verticalAlign ? "" : verticalAlign, tableStyle ? tableStyle : null].filter(Boolean).join(" ");
      var TEMPLATE = [["nichetablewpwp/tablerowhead", {}, [["nichetablewpwp/tableheading", {}], ["nichetablewpwp/tableheading", {}], ["nichetablewpwp/tableheading", {}]]], ["nichetablewpwp/tablerow", {}, [["nichetablewpwp/tabledata", {}], ["nichetablewpwp/tabledata", {}], ["nichetablewpwp/tabledata", {}]]]];

      return [
      /* --------  Gutenburg Option ---------*/
      wp.element.createElement(Inspector, _extends({}, this.props, { key: "inspector" })),
      /* -------- / Gutenburg Option ---------*/

      /* --------  editor return ---------*/
      wp.element.createElement(
        "div",
        { id: "nichetablewpwp-" + block_id, className: classnames(className, blockClassName) },
        wp.element.createElement(
          "span",
          { className: "table_edit" },
          "Click here to jump Table Basic Setting"
        ),
        wp.element.createElement(InnerBlocks, { allowedBlocks: ALLOWED_BLOCKS, template: TEMPLATE }),
        wp.element.createElement(
          "style",
          null,
          "\n\t\t\t\t\t\t#nichetablewpwp" + block_id + " [data-type=\"nichetablewpwp/tabledata\"], #nichetablewpwp" + block_id + " [data-type=\"nichetablewpwp/tableheading\"], .border-around-table,.border-bottom-each-row--around-table, .border-bottom-each-row--around-table .table_row, .border-bottom-each-row .table_row, .border-all [data-type=\"nichetablewpwp/tabledata\"], .border-all, .border-all [data-type=\"nichetablewpwp/tableheading\"]{border-color: " + borderColor + " !important;}\n            \n            #nichetablewpwp" + block_id + ".border-around-table [data-type=\"nichetablewpwp/tabledata\"], #nichetablewpwp" + block_id + ".border-around-table [data-type=\"nichetablewpwp/tableheading\"], #nichetablewpwp" + block_id + ".border-bottom-each-row--around-table [data-type=\"nichetablewpwp/tabledata\"], #nichetablewpwp" + block_id + ".border-bottom-each-row--around-table [data-type=\"nichetablewpwp/tableheading\"], #nichetablewpwp" + block_id + ".border-bottom-each-row [data-type=\"nichetablewpwp/tabledata\"], #nichetablewpwp" + block_id + ".border-bottom-each-row [data-type=\"nichetablewpwp/tableheading\"]{border-color: #f1f1f1 !important;}\n\n            #nichetablewpwp-" + block_id + " [class*=\"editor-block-list__layout\"]\t[data-type=\"nichetablewpwp/tablerow\"]:nth-of-type(odd){background:" + nthrColor + " !important;}\n\t\t\t\t\t"
        )
      )
      /* -------- / editor return ---------*/
      ];
    }
  }]);

  return Edit;
}(Component);

export default Edit;


//////////////////
// WEBPACK FOOTER
// ./src/niche-table/table/components/edit.js
// module id = 55
// module chunks = 0