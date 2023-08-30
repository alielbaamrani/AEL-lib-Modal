"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    isDisplayed = false,
    onCloseModal,
    content
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-modal",
    style: {
      display: isDisplayed ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-modal-main"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-modal-content"
  }, content), /*#__PURE__*/_react.default.createElement("div", {
    onClick: onCloseModal,
    className: "custom-modal-btn-close"
  }, "Ferm\xE9")));
};
var _default = Modal;
exports.default = _default;