
          window.__NEXT_REGISTER_PAGE('/setup', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 464:
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
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Exobot : Setting Up a New Bot')), _react2.default.createElement(_navbar2.default, { currentPage: '/setup' }), _react2.default.createElement(_reflexbox.Box, { p: 3, col: 8 }, _react2.default.createElement(_rebass.Heading, { level: 1 }, 'Bot Setup'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'The easiest way to set up is with the build tools. With node 6+ installed, run:'), _react2.default.createElement(_rebass.Pre, null, 'npm install -g @exoplay/exobot-build\nmkdir exobot\ncd exobot\nexobot new bot\nnpm start'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'This will set you up with an npm package with the basics installed, create a git repo, generate a sample configuration file, and pre-build a bot.'), _react2.default.createElement(_rebass.Section, null, _react2.default.createElement(_rebass.SectionHeader, { heading: 'Configuration Basics' }), _react2.default.createElement(_rebass.Text, null, 'There are two primary ways to configure Exobot: you can either use a static configuration file with configuration built-in, or you can lean on automatically-loaded environment variables to configure your bot.'), _react2.default.createElement(_rebass.Heading, { level: 3, mt: 2 }, 'The Environmental Way'), _react2.default.createElement(_rebass.Heading, { level: 3, mt: 2 }, 'The Explicit Way'), _react2.default.createElement(_rebass.Text, { mt: 1 }, 'Exobot is configured in its constructor, which takes two arguments - a bot name (a required string), and an options object.'), _react2.default.createElement(_rebass.Text, { mt: 1 }, 'The bot name is used for commands - if your bot\'s name is \'exobot\', it will respond to commands beginning with \'exobot\'. You\'ll want this to match the name used in your chat service (so if its name is actually \'DEATHBOT_9000\' in Slack, you should call it that here too, or people may be confused.)'), _react2.default.createElement(_rebass.Text, { mt: 1 }, 'The options object contains all other configuration - such as a list of plugins and chat service adapters, log levels, and data encryption keys.'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('b', null, 'alias'), ' - an additional way to trigger exobot commands. \'/\', \';\', or \'hey bot\', for example.'), _react2.default.createElement('li', null, _react2.default.createElement('b', null, 'dapters'), ' - an array of initialized chat adapters, such as slack, discord, or twitch. exobot also comes with a shell adapter for playing around in your terminal.'), _react2.default.createElement('li', null, _react2.default.createElement('b', null, 'plugins'), ' - an array of initialized plugins, such as giphy or points. exobot also comes with help and greetings plugins as examples.'), _react2.default.createElement('li', null, _react2.default.createElement('b', null, 'readFile'), ' and ', _react2.default.createElement('b', null, 'writeFile'), ' - functions called when the in-memory json db is saved. By default, this writes a json file to cwd/data/botname.json, but you could also override the default local file storage to use s3 with ', _react2.default.createElement('code', null, '@exoplay/exobot-db-s3'), '.'), _react2.default.createElement('li', null, _react2.default.createElement('b', null, 'dbPath'), ' - if you\'re using local file storage, you can set where to save. Defaults to cwd/data/botname.json.'))), _react2.default.createElement(_rebass.Section, null, _react2.default.createElement(_rebass.SectionHeader, { heading: 'Permissions Management' }), _react2.default.createElement(_rebass.Text, null, 'Exobot has a robust group-based permissions model. By default anybody can access commands, but you can use the built-in', _react2.default.createElement('code', null, ' ', 'Permissions', ' '), ' plugin to lock down the bot and whitelist commands to users in specific groups.')), _react2.default.createElement(_rebass.Section, null, _react2.default.createElement(_rebass.SectionHeader, { heading: 'Webhooks' }), _react2.default.createElement(_rebass.Text, null, 'Building on top of the permissions sytem, you can also attach the', _react2.default.createElement('code', null, ' ', 'HTTP', ' '), ' adapter to exobot to allow it to receive messages over HTTP.'))), _react2.default.createElement(_footer2.default, null));
};

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(464);


/***/ })

},[970]);
            return { page: comp.default }
          })
        