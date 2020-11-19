"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonWrapper = exports.Wrapper = void 0;
var styled_components_1 = require("styled-components");
exports.Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0 5px 10px rgba(0,0,0,.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n  }\n"], ["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0 5px 10px rgba(0,0,0,.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n  }\n"])));
exports.ButtonWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  transition: all .3s ease;\n\n  :hover {\n    opacity: .8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: .8rem;\n    width: 100%;\n  }\n"], ["\n  transition: all .3s ease;\n\n  :hover {\n    opacity: .8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: .8rem;\n    width: 100%;\n  }\n"])));
var templateObject_1, templateObject_2;
