"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _core = require("@rjsf/core");

var _Theme = _interopRequireDefault(require("../Theme"));

var SemanticUIForm = (0, _core.withTheme)(_Theme.default);
var _default = SemanticUIForm;
exports.default = _default;