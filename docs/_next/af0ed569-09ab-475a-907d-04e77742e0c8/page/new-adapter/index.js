
          window.__NEXT_REGISTER_PAGE('/new-adapter', function() {
            var comp = module.exports =
webpackJsonp([9],{

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(59);

var _head2 = _interopRequireDefault(_head);

var _reflexbox = __webpack_require__(62);

var _rebass = __webpack_require__(32);

var _footer = __webpack_require__(100);

var _footer2 = _interopRequireDefault(_footer);

var _navbar = __webpack_require__(101);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Exobot : Building a New Adapter')), _react2.default.createElement(_navbar2.default, { currentPage: '/new-plugin' }), _react2.default.createElement(_reflexbox.Box, { p: 3, col: 8 }, _react2.default.createElement(_rebass.Heading, { level: 1 }, 'Building Adapters'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'Adapters allow your bot to connect to a chat service, such as Slack or Discord. exobot comes with a shell adapter by default, but you could also build your own for your chat service of choice. Some examples:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'https://github.com/exoplay/exobot-adapter-slack' }, '@exoplay/exobot-plugin-slack')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'https://github.com/exoplay/exobot-adapter-discord' }, '@exoplay/exobot-plugin-discord')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'https://github.com/exoplay/exobot-adapter-twitch' }, '@exoplay/exobot-plugin-twitch'))), _react2.default.createElement(_rebass.Section, null, _react2.default.createElement(_rebass.SectionHeader, { heading: 'An Example Adapter' })), _react2.default.createElement(_rebass.Section, null, _react2.default.createElement(_rebass.SectionHeader, { heading: 'A Detailed Anatomy of an Adapter ' }))), _react2.default.createElement(_footer2.default, null));
};

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(462);


/***/ })

},[967]);
            return { page: comp.default }
          })
        