'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap/dist/js/bootstrap.js');

require('./assets/styles/app.scss');

var _fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _vueFontawesome = require('@fortawesome/vue-fontawesome');

var _veeValidate = require('vee-validate');

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _vueScrollto = require('vue-scrollto');

var _vueScrollto2 = _interopRequireDefault(_vueScrollto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueScrollto2.default);
_vue2.default.use(_veeValidate2.default);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faLock);
_vue2.default.component('font-awesome-icon', _vueFontawesome.FontAwesomeIcon);
new _vue2.default({
  el: '#app',
  render: function render(h) {
    return h(_App2.default);
  }
});