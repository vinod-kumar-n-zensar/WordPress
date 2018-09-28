'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _vueAxios = require('vue-axios');

var _vueAxios2 = _interopRequireDefault(_vueAxios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueAxios2.default, _axios2.default);
var baseURL = 'http://localhost:8080/data.json';

exports.default = {
    getCommonApi: function getCommonApi() {
        return _vue2.default.axios.get(baseURL).then(function (response) {
            return response.data;
        });
    }
};