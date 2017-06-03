
          window.__NEXT_REGISTER_PAGE('/new-plugin', function() {
            var comp = module.exports =
webpackJsonp([4],{

/***/ 463:
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

var _light = __webpack_require__(847);

var _light2 = _interopRequireDefault(_light);

var _javascript = __webpack_require__(846);

var _javascript2 = _interopRequireDefault(_javascript);

var _ascetic = __webpack_require__(848);

var _ascetic2 = _interopRequireDefault(_ascetic);

var _footer = __webpack_require__(100);

var _footer2 = _interopRequireDefault(_footer);

var _navbar = __webpack_require__(101);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _light.registerLanguage)('javascript', _javascript2.default);
exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Exobot : Building a New Plugin')), _react2.default.createElement(_navbar2.default, { currentPage: '/new-plugin' }), _react2.default.createElement(_reflexbox.Box, { p: 3, col: 8 }, _react2.default.createElement(_rebass.Heading, { level: 1 }, 'Building Plugins'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'Building custom plugins is the way to make your bot truly yours, whether simple keyword triggers like responding with a gif or YouTube video when it hears a word, or something more complex, the strength of Exobot is in its flexibility.'), _react2.default.createElement(_rebass.Section, null, _react2.default.createElement(_rebass.SectionHeader, { heading: 'An Example Plugin' }), _react2.default.createElement(_light2.default, { language: 'javascript', style: _ascetic2.default }, 'import { ChatPlugin, respond, help, permissionGroup } from \'@exoplay/exobot\';\n\n  export default class Ping extends ChatPlugin {\n    static name = \'ping\';\n\n    @help(\'Says "pong" when you send it "ping"\');\n    @permissionGroup(\'ping\');\n    @respond(/^ping$/);\n    pong (match, message) {\n      return \'pong\';\n    }\n  }'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'In this plugin, we have extended exobot\'s ChatPlugin class- this gives it functionality to respond to chat messages. We\'ve then told it to respond to the regex /ping/ by firing a function, called pong. The return value of the function is then sent back to the chat channel.')), _react2.default.createElement(_rebass.Section, null, _react2.default.createElement(_rebass.SectionHeader, { heading: 'A Detailed Anatomy of a Chat Plugin' }), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'Chat plugins follow the following lifecycle:'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'First, The constructor is called with options sent in. As the bot is initialized with instances of plugins, this is where you would pass in configuration options, such as:'), _react2.default.createElement(_light2.default, { language: 'javascript', style: _ascetic2.default }, 'import { ChatPlugin, respond, help, permissionGroup } from \'@exoplay/exobot\';\n\nclass StatusPlugin extends ChatPlugin {\n  constructor (options) {\n    super(options);\n    this.endpoint = options.endpoint;\n  }\n\n  //...\n\n  @help(\'Gets the status of the configured endpoint.\');\n  @permissionGroup(\'get\');\n  @respond(m => m.text === \'status\');\n  async getStatus () {\n    const res = await this.http.get(this.endpoint);\n    return res.statusCode;\n  }\n}'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'In the above example, we\'d initialize the exobot instance with plugins: ', _react2.default.createElement('code', null, '{ status: [StatusPlugin, { endpoint: \'https://github.com\' }] } '), 'to pass in the options we need later on.'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'You\'ll want to give the plugin a static name property - this is used if you use the permissions plugin to restrict access to commands.'), _react2.default.createElement(_rebass.Text, { mt: 2 }, _react2.default.createElement('code', null, 'listen'), ' and ', _react2.default.createElement('code', null, 'respond'), ' are decorators that take a function and fire the method when a match is found. ', _react2.default.createElement('code', null, 'listen'), ' and ', _react2.default.createElement('code', null, 'respond'), ' are the most important parts of your chat plugin - these allow the bot to interact with chat. Each can take either a regex or a function, and if a match is found (or, if a function, if it is truthy), it will fire the function passed in. Functions for responding can be promises (or ES7 async functions) and will resolve when the promises do. This makes it easy to write asynchronous code, such as firing http requests.'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'The responding function gets two arguments: a match object, which is either the regex\'s exec response or the function return value, and a Message object, which contains the original message, user, and whether the message is a whisper.'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'You can optionally add a ', _react2.default.createElement('code', null, 'help'), ' decorator, which exobot\'s help plugin uses to explain to useres how the plugin works.'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'You should also add a ', _react2.default.createElement('code', null, 'permissionsGrou'), 'p, which you can then use with exobot\'s Permissions plugin to restrict access to certain commands. In the following case, you can give access to ', _react2.default.createElement('code', null, 'status.get'), ' to groups, and if you deny access by default in configuration, only users in the group with access to ', _react2.default.createElement('code', null, 'status.get'), ' can use the command. (The bot will ignore the command from everyone else.)'), _react2.default.createElement(_rebass.Text, { mt: 2 }, 'Finally, the bot also exposes ', _react2.default.createElement('code', null, 'bot.http'), ', which is a promise-ified superagent wrapper, to make http calls easy to make.'), _react2.default.createElement(_light2.default, { language: 'javascript', style: _ascetic2.default }, 'import { ChatPlugin, respond, listen, permissionsGroup, help } from \'@exoplay/exobot\';\n\nclass StatusPlugin extends ChatPlugin {\n\n  static name = \'Status\';\n\n  help = [\n    \'Get the status of an http endpoint. Responds to `status` or listens to\',\n    \'status <http://whatever.com>.\'\n  ].join(\'\\n\');\n\n  constructor (options) {\n    super(options);\n    this.endpoint = options.endpoint;\n  }\n\n  register (bot) {\n    super.register(bot);\n\n    if (!this.endpoint) {\n      bot.log.warn(\'No endpoint passed in to StatusPlugin.\');\n    }\n\n    this.respond(/status/, this.getStatus);\n    this.listen(/^status (http:\\/\\/\\S+)/, this.getStatus);\n    this.listen(m => m.text === \'status\', this.getStatus);\n  }\n\n\n  @help(\'use status or status <http> to get http status codes.\');\n  @permissionsGroup(\'get\');\n  @respond(/^status$/);\n  @listen(/^status (http:\\/\\/\\S+)/);\n  @listen(m => m.text === \'status\');\n  async getStatus (match, message) {\n    let endpoint = this.endpoint;\n\n    // if the regex succeeded, match[1] should be an http endpoint\n    if (match && match.length) {\n      endpoint = match[1];\n    }\n\n    const res = await this.http.get(this.endpoint);\n    return res.statusCode;\n  }\n}'))), _react2.default.createElement(_footer2.default, null));
};

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in of if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const export super debugger as async await static ' +
      // ECMAScript 6 modules import
      'import from as'
    ,
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
      'Promise'
  };
  var EXPRESSIONS;
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ]
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: /[{,]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // E4X / JSX
            begin: /</, end: /(\/\w+|\w+\/)>/,
            subLanguage: 'xml',
            contains: [
              {begin: /<\w+\s*\/>/, skip: true},
              {
                begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
                contains: [
                  {begin: /<\w+\s*\/>/, skip: true},
                  'self'
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
      }
    ],
    illegal: /#(?!!)/
  };
};

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module lowlight:lowlight
 * @fileoverview Virtual syntax highlighting for virtual
 *   DOMs and non-HTML things.
 */



/* Dependencies. */
var high = __webpack_require__(804);

/* The lowlight interface, which has to be compatible
 * with highlight.js, as this object is passed to
 * highlight.js syntaxes. */

/** High constructor. */
function High() {}

High.prototype = high;

/* Expose. */
var low = new High(); // Ha!

module.exports = low;

low.highlight = highlight;
low.highlightAuto = autoHighlight;
low.registerLanguage = registerLanguage;
low.getLanguage = getLanguage;

/* Methods. */
var inherit = high.inherit;

/* Constants. */
var DEFAULT_PREFIX = 'hljs-';
var KEY_INSENSITIVE = 'case_insensitive';
var KEY_CACHED_VARIANTS = 'cached_variants';
var EMPTY = '';

/* Constant characters. */
var C_SPACE = ' ';
var C_PIPE = '|';

/* Constant types. */
var T_ELEMENT = 'element';
var T_TEXT = 'text';
var T_SPAN = 'span';

/* Maps of syntaxes. */
var languageNames = [];
var languages = {};
var aliases = {};

/* Methods. */
var own = {}.hasOwnProperty;

/**
 * Highlighting with language detection.  Accepts a string
 * with the code to highlight.  Returns an object with the
 * following properties:
 *
 * - language (detected language)
 * - relevance (int)
 * - value (an HTML string with highlighting markup)
 * - secondBest (object with the same structure for
 *   second-best heuristically detected language, may
 *   be absent).
 *
 * @param {string} value - Source to highlight.
 * @param {Object?} [options={}] - Configuration.
 * @param {string} [options.prefix='hljs-'] - Highlight
 *   prefix.
 * @param {Array.<string>} [options.subset] - List of
 *   allowed languages.
 * @return {Object} - Highlighted `value`.
 */
function autoHighlight(value, options) {
  var settings = options || {};
  var prefix = settings.prefix;
  var subset = settings.subset || languageNames;
  var length = subset.length;
  var index = -1;
  var result;
  var secondBest;
  var current;
  var name;

  if (prefix === null || prefix === undefined) {
    prefix = DEFAULT_PREFIX;
  }

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for value, got `' + value + '`');
  }

  secondBest = normalize({});
  result = normalize({});

  while (++index < length) {
    name = subset[index];

    if (!getLanguage(name)) {
      continue;
    }

    current = normalize(coreHighlight(name, value, false, prefix));

    current.language = name;

    if (current.relevance > secondBest.relevance) {
      secondBest = current;
    }

    if (current.relevance > result.relevance) {
      secondBest = result;
      result = current;
    }
  }

  if (secondBest.language) {
    result.secondBest = secondBest;
  }

  return result;
}

/**
 * Highlighting `value` in the language `language`.
 *
 * @param {string} language - Language name.
 * @param {string} value - Source to highlight.
 * @param {Object?} [options={}] - Configuration.
 * @param {string} [options.prefix='hljs-'] - Highlight
 *   prefix.
 * @return {Object} - Highlighted `value`.
*/
function highlight(language, value, options) {
  var settings = options || {};
  var prefix = settings.prefix;

  if (prefix === null || prefix === undefined) {
    prefix = DEFAULT_PREFIX;
  }

  return normalize(coreHighlight(language, value, true, prefix));
}

/**
 * Register a language.
 *
 * @param {string} name - Name of language.
 * @param {Function} syntax - Syntax constructor.
 */
function registerLanguage(name, syntax) {
  var lang = languages[name] = syntax(low);
  var values = lang.aliases;
  var length = values && values.length;
  var index = -1;

  languageNames.push(name);

  while (++index < length) {
    aliases[values[index]] = name;
  }
}

/**
 * Core highlighting function.  Accepts a language name, or
 * an alias, and a string with the code to highlight.
 * Returns an object with the following properties:
 *
 * @param {string} name - Language name.
 * @param {string} value - Source to highlight.
 * @param {boolean} [ignore=false] - Whether to ignore
 *   illegals.
 * @param {string?} [prefix] - Highlight prefix.
 * @param {boolean} [continuation] - Whether to continue
 *   processing with `continuation`.
 * @return {Object} - Highlighted `value`.
*/
function coreHighlight(name, value, ignore, prefix, continuation) {
  var continuations = {};
  var stack = [];
  var modeBuffer = EMPTY;
  var relevance = 0;
  var language;
  var top;
  var current;
  var currentChildren;
  var offset;
  var count;
  var match;
  var children;

  if (typeof name !== 'string') {
    throw new Error('Expected `string` for name, got `' + name + '`');
  }

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for value, got `' + value + '`');
  }

  language = getLanguage(name);
  current = top = continuation || language;
  currentChildren = children = [];

  if (!language) {
    throw new Error('Unknown language: `' + name + '` is not registered');
  }

  compileLanguage(language);

  try {
    offset = top.terminators.lastIndex = 0;
    match = top.terminators.exec(value);

    while (match) {
      count = processLexeme(value.substring(offset, match.index), match[0]);
      offset = top.terminators.lastIndex = match.index + count;
      match = top.terminators.exec(value);
    }

    processLexeme(value.substr(offset));
    current = top;

    while (current.parent) {
      if (current.className) {
        pop();
      }

      current = current.parent;
    }

    return {
      relevance: relevance,
      value: currentChildren,
      language: name,
      top: top
    };
  } catch (err) {
    /* istanbul ignore if - Catch-all  */
    if (err.message.indexOf('Illegal') === -1) {
      throw err;
    }

    return {relevance: 0, value: addText(value, [])};
  }

  /* Process a lexeme.  Returns next position. */
  function processLexeme(buffer, lexeme) {
    var newMode;
    var endMode;
    var origin;

    modeBuffer += buffer;

    if (lexeme === undefined) {
      addSiblings(processBuffer(), currentChildren);

      return 0;
    }

    newMode = subMode(lexeme, top);

    if (newMode) {
      addSiblings(processBuffer(), currentChildren);

      startNewMode(newMode, lexeme);

      return newMode.returnBegin ? 0 : lexeme.length;
    }

    endMode = endOfMode(top, lexeme);

    if (endMode) {
      origin = top;

      if (!(origin.returnEnd || origin.excludeEnd)) {
        modeBuffer += lexeme;
      }

      addSiblings(processBuffer(), currentChildren);

      /* Close open modes. */
      do {
        if (top.className) {
          pop();
        }

        relevance += top.relevance;
        top = top.parent;
      } while (top !== endMode.parent);

      if (origin.excludeEnd) {
        addText(lexeme, currentChildren);
      }

      modeBuffer = EMPTY;

      if (endMode.starts) {
        startNewMode(endMode.starts, EMPTY);
      }

      return origin.returnEnd ? 0 : lexeme.length;
    }

    if (isIllegal(lexeme, top)) {
      throw new Error(
        'Illegal lexeme "' + lexeme + '" for mode "' +
        (top.className || '<unnamed>') + '"'
      );
    }

    /* Parser should not reach this point as all
     * types of lexemes should be caught earlier,
     * but if it does due to some bug make sure it
     * advances at least one character forward to
     * prevent infinite looping. */
    modeBuffer += lexeme;

    return lexeme.length || /* istanbul ignore next */ 1;
  }

  /* Start a new mode with a `lexeme` to process. */
  function startNewMode(mode, lexeme) {
    var node;

    if (mode.className) {
      node = build(mode.className, []);
    }

    if (mode.returnBegin) {
      modeBuffer = EMPTY;
    } else if (mode.excludeBegin) {
      addText(lexeme, currentChildren);

      modeBuffer = EMPTY;
    } else {
      modeBuffer = lexeme;
    }

    /* Enter a new mode. */
    if (node) {
      currentChildren.push(node);
      stack.push(currentChildren);
      currentChildren = node.children;
    }

    top = Object.create(mode, {parent: {value: top}});
  }

  /* Process the buffer. */
  function processBuffer() {
    var result = top.subLanguage === undefined ? processKeywords() : processSubLanguage();
    modeBuffer = EMPTY;
    return result;
  }

  /* Process a sublanguage (returns a list of nodes). */
  function processSubLanguage() {
    var explicit = typeof top.subLanguage === 'string';
    var subvalue;

    /* istanbul ignore if - support non-loaded sublanguages */
    if (explicit && !languages[top.subLanguage]) {
      return addText(modeBuffer, []);
    }

    if (explicit) {
      subvalue = coreHighlight(
        top.subLanguage,
        modeBuffer,
        true,
        prefix,
        continuations[top.subLanguage]
      );
    } else {
      subvalue = autoHighlight(modeBuffer, {
        subset: top.subLanguage.length ? top.subLanguage : undefined,
        prefix: prefix
      });
    }

    /* Counting embedded language score towards the
     * host language may be disabled with zeroing the
     * containing mode relevance.  Usecase in point is
     * Markdown that allows XML everywhere and makes
     * every XML snippet to have a much larger Markdown
     * score. */
    if (top.relevance > 0) {
      relevance += subvalue.relevance;
    }

    if (explicit) {
      continuations[top.subLanguage] = subvalue.top;
    }

    return [build(subvalue.language, subvalue.value, true)];
  }

  /* Process keywords. Returns nodes. */
  function processKeywords() {
    var nodes = [];
    var lastIndex;
    var keyword;
    var node;
    var submatch;

    if (!top.keywords) {
      return addText(modeBuffer, nodes);
    }

    lastIndex = 0;

    top.lexemesRe.lastIndex = 0;

    keyword = top.lexemesRe.exec(modeBuffer);

    while (keyword) {
      addText(modeBuffer.substring(lastIndex, keyword.index), nodes);

      submatch = keywordMatch(top, keyword);

      if (submatch) {
        relevance += submatch[1];

        node = build(submatch[0], []);

        nodes.push(node);

        addText(keyword[0], node.children);
      } else {
        addText(keyword[0], nodes);
      }

      lastIndex = top.lexemesRe.lastIndex;
      keyword = top.lexemesRe.exec(modeBuffer);
    }

    addText(modeBuffer.substr(lastIndex), nodes);

    return nodes;
  }

  /* Add siblings. */
  function addSiblings(siblings, nodes) {
    var length = siblings.length;
    var index = -1;
    var sibling;

    while (++index < length) {
      sibling = siblings[index];

      if (sibling.type === T_TEXT) {
        addText(sibling.value, nodes);
      } else {
        nodes.push(sibling);
      }
    }
  }

  /* Add a text. */
  function addText(value, nodes) {
    var tail;

    if (value) {
      tail = nodes[nodes.length - 1];

      if (tail && tail.type === T_TEXT) {
        tail.value += value;
      } else {
        nodes.push(buildText(value));
      }
    }

    return nodes;
  }

  /* Build a text. */
  function buildText(value) {
    return {type: T_TEXT, value: value};
  }

  /* Build a span. */
  function build(name, contents, noPrefix) {
    return {
      type: T_ELEMENT,
      tagName: T_SPAN,
      properties: {
        className: [(noPrefix ? EMPTY : prefix) + name]
      },
      children: contents
    };
  }

  /* Check if the first word in `keywords` is a keyword. */
  function keywordMatch(mode, keywords) {
    var keyword = keywords[0];

    if (language[KEY_INSENSITIVE]) {
      keyword = keyword.toLowerCase();
    }

    return own.call(mode.keywords, keyword) && mode.keywords[keyword];
  }

  /* Check if `lexeme` is illegal according to `mode`. */
  function isIllegal(lexeme, mode) {
    return !ignore && test(mode.illegalRe, lexeme);
  }

  /* Check if `lexeme` ends `mode`. */
  function endOfMode(mode, lexeme) {
    if (test(mode.endRe, lexeme)) {
      while (mode.endsParent && mode.parent) {
        mode = mode.parent;
      }
      return mode;
    }

    if (mode.endsWithParent) {
      return endOfMode(mode.parent, lexeme);
    }
  }

  /* Check a sub-mode. */
  function subMode(lexeme, mode) {
    var values = mode.contains;
    var length = values.length;
    var index = -1;

    while (++index < length) {
      if (test(values[index].beginRe, lexeme)) {
        return values[index];
      }
    }
  }

  /* Exit the current context. */
  function pop() {
    /* istanbul ignore next - removed in hljs 9.3 */
    currentChildren = stack.pop() || children;
  }
}

function expandMode(mode) {
  if (mode.variants && !mode[KEY_CACHED_VARIANTS]) {
    mode[KEY_CACHED_VARIANTS] = mode.variants.map(function (variant) {
      return inherit(mode, {variants: null}, variant);
    });
  }

  return mode[KEY_CACHED_VARIANTS] || (mode.endsWithParent && [inherit(mode)]) || [mode];
}

/* Compile a language. */
function compileLanguage(language) {
  compileMode(language);

  /* Compile a language mode, optionally with a parent. */
  function compileMode(mode, parent) {
    var compiledKeywords = {};
    var terminators;

    if (mode.compiled) {
      return;
    }

    mode.compiled = true;

    mode.keywords = mode.keywords || mode.beginKeywords;

    if (mode.keywords) {
      if (typeof mode.keywords === 'string') {
        flatten('keyword', mode.keywords);
      } else {
        Object.keys(mode.keywords).forEach(function (className) {
          flatten(className, mode.keywords[className]);
        });
      }

      mode.keywords = compiledKeywords;
    }

    mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

    if (parent) {
      if (mode.beginKeywords) {
        mode.begin = '\\b(' + mode.beginKeywords.split(C_SPACE).join(C_PIPE) + ')\\b';
      }

      if (!mode.begin) {
        mode.begin = /\B|\b/;
      }

      mode.beginRe = langRe(mode.begin);

      if (!mode.end && !mode.endsWithParent) {
        mode.end = /\B|\b/;
      }

      if (mode.end) {
        mode.endRe = langRe(mode.end);
      }

      mode.terminatorEnd = source(mode.end) || EMPTY;

      if (mode.endsWithParent && parent.terminatorEnd) {
        mode.terminatorEnd += (mode.end ? C_PIPE : EMPTY) + parent.terminatorEnd;
      }
    }

    if (mode.illegal) {
      mode.illegalRe = langRe(mode.illegal);
    }

    if (mode.relevance === undefined) {
      mode.relevance = 1;
    }

    if (!mode.contains) {
      mode.contains = [];
    }

    mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
      return expandMode(c === 'self' ? mode : c);
    }));

    mode.contains.forEach(function (c) {
      compileMode(c, mode);
    });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    terminators =
      mode.contains.map(function (c) {
        return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
      })
      .concat([mode.terminatorEnd, mode.illegal])
      .map(source)
      .filter(Boolean);

    mode.terminators = terminators.length ?
      langRe(terminators.join(C_PIPE), true) :
      {exec: execNoop};

    /* Flatten a classname. */
    function flatten(className, value) {
      var pairs;
      var pair;
      var index;
      var length;

      if (language[KEY_INSENSITIVE]) {
        value = value.toLowerCase();
      }

      pairs = value.split(C_SPACE);
      length = pairs.length;
      index = -1;

      while (++index < length) {
        pair = pairs[index].split(C_PIPE);

        compiledKeywords[pair[0]] = [
          className,
          pair[1] ? Number(pair[1]) : 1
        ];
      }
    }
  }

  /* Create a regex for `value`. */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' + (language[KEY_INSENSITIVE] ? 'i' : '') +
      (global ? 'g' : '')
    );
  }

  /* Get the source of an expression or string. */
  function source(re) {
    return (re && re.source) || re;
  }
}

/* Normalize a syntax result. */
function normalize(result) {
  return {
    relevance: result.relevance || 0,
    language: result.language || null,
    value: result.value || []
  };
}

/* Check if `expression` matches `lexeme`. */
function test(expression, lexeme) {
  var match = expression && expression.exec(lexeme);
  return match && match.index === 0;
}

/* No-op exec. */
function execNoop() {
  return null;
}

/* Get a language by `name`. */
function getLanguage(name) {
  name = name.toLowerCase();

  return languages[name] || languages[aliases[name]];
}


/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if(true) {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if(typeof define === 'function' && define.amd) {
      define([], function() {
        return globalObject.hljs;
      });
    }
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i]

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }
    return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_mode(c === 'self' ? mode : c)
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR)
      ? value
      : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
          return '';
      });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));


/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(81);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(83);

var _extends3 = _interopRequireDefault(_extends2);

exports.createStyleObject = createStyleObject;
exports.createClassNameString = createClassNameString;
exports.createChildren = createChildren;
exports.default = createElement;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments[2];

  return classNames.reduce(function (styleObject, className) {
    return (0, _extends3.default)({}, styleObject, stylesheet[className]);
  }, elementStyle);
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: 'code-segment-' + childrenCount + '-' + i
      });
    });
  };
}

function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props = useInlineStyles ? {
      style: createStyleObject(properties.className, (0, _assign2.default)({}, properties.style, style), stylesheet)
    } : { className: createClassNameString(properties.className) };
    var children = childrenCreator(node.children);
    return _react2.default.createElement(
      TagName,
      (0, _extends3.default)({ key: key }, props),
      children
    );
  }
}

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(81);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(490);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = function (lowlight, defaultStyle) {
  return function SyntaxHighlighter(_ref5) {
    var language = _ref5.language,
        children = _ref5.children,
        _ref5$style = _ref5.style,
        style = _ref5$style === undefined ? defaultStyle : _ref5$style,
        _ref5$customStyle = _ref5.customStyle,
        customStyle = _ref5$customStyle === undefined ? {} : _ref5$customStyle,
        _ref5$codeTagProps = _ref5.codeTagProps,
        codeTagProps = _ref5$codeTagProps === undefined ? {} : _ref5$codeTagProps,
        _ref5$useInlineStyles = _ref5.useInlineStyles,
        useInlineStyles = _ref5$useInlineStyles === undefined ? true : _ref5$useInlineStyles,
        _ref5$showLineNumbers = _ref5.showLineNumbers,
        showLineNumbers = _ref5$showLineNumbers === undefined ? false : _ref5$showLineNumbers,
        _ref5$startingLineNum = _ref5.startingLineNumber,
        startingLineNumber = _ref5$startingLineNum === undefined ? 1 : _ref5$startingLineNum,
        lineNumberContainerStyle = _ref5.lineNumberContainerStyle,
        lineNumberStyle = _ref5.lineNumberStyle,
        wrapLines = _ref5.wrapLines,
        _ref5$lineStyle = _ref5.lineStyle,
        lineStyle = _ref5$lineStyle === undefined ? {} : _ref5$lineStyle,
        renderer = _ref5.renderer,
        _ref5$PreTag = _ref5.PreTag,
        PreTag = _ref5$PreTag === undefined ? 'pre' : _ref5$PreTag,
        _ref5$CodeTag = _ref5.CodeTag,
        CodeTag = _ref5$CodeTag === undefined ? 'code' : _ref5$CodeTag,
        rest = (0, _objectWithoutProperties3.default)(_ref5, ['language', 'children', 'style', 'customStyle', 'codeTagProps', 'useInlineStyles', 'showLineNumbers', 'startingLineNumber', 'lineNumberContainerStyle', 'lineNumberStyle', 'wrapLines', 'lineStyle', 'renderer', 'PreTag', 'CodeTag']);

    /* 
     * some custom renderers rely on individual row elements so we need to turn wrapLines on 
     * if renderer is provided and wrapLines is undefined
    */
    wrapLines = renderer && wrapLines === undefined ? true : wrapLines;
    renderer = renderer || defaultRenderer;
    var codeTree = language ? lowlight.highlight(language, children) : lowlight.highlightAuto(children);
    if (codeTree.language === null) {
      codeTree.value = [{ type: 'text', value: children }];
    }
    var defaultPreStyle = style.hljs || { backgroundColor: '#fff' };
    var preProps = useInlineStyles ? (0, _assign2.default)({}, rest, { style: (0, _assign2.default)({}, defaultPreStyle, customStyle) }) : (0, _assign2.default)({}, rest, { className: 'hljs' });

    var tree = wrapLines ? wrapLinesInSpan(codeTree, lineStyle) : codeTree.value;
    var lineNumbers = showLineNumbers ? _react2.default.createElement(LineNumbers, {
      containerStyle: lineNumberContainerStyle,
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: children
    }) : null;
    return _react2.default.createElement(
      PreTag,
      preProps,
      lineNumbers,
      _react2.default.createElement(
        CodeTag,
        codeTagProps,
        renderer({ rows: tree, stylesheet: style, useInlineStyles: useInlineStyles })
      )
    );
  };
};

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createElement = __webpack_require__(844);

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}

function getLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;

  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return _react2.default.createElement(
      'span',
      {
        key: 'line-' + i,
        className: 'react-syntax-highlighter-line-number',
        style: typeof style === 'function' ? style(number) : style
      },
      number + '\n'
    );
  });
}

function LineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === undefined ? { float: 'left', paddingRight: '10px' } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === undefined ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;

  return _react2.default.createElement(
    'code',
    { style: containerStyle },
    getLineNumbers({
      lines: codeString.replace(/\n$/, '').split('\n'),
      style: numberStyle,
      startingLineNumber: startingLineNumber
    })
  );
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineStyle = _ref3.lineStyle,
      _ref3$className = _ref3.className,
      className = _ref3$className === undefined ? [] : _ref3$className;

  return {
    type: 'element',
    tagName: 'span',
    properties: {
      className: className,
      style: typeof lineStyle === 'function' ? lineStyle(lineNumber) : lineStyle
    },
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: className
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }
  return newTree;
}

function wrapLinesInSpan(codeTree, lineStyle) {
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      (function () {
        var splitValue = value.split('\n');
        splitValue.forEach(function (text, i) {
          var lineNumber = newTree.length + 1;
          var newChild = { type: 'text', value: text + '\n' };
          if (i === 0) {
            var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({ children: [newChild], className: node.properties.className }));
            newTree.push(createLineElement({ children: _children, lineNumber: lineNumber, lineStyle: lineStyle }));
          } else if (i === splitValue.length - 1) {
            var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
            if (stringChild) {
              var lastLineInPreviousSpan = { type: 'text', value: '' + text };
              var newElem = createLineElement({ children: [lastLineInPreviousSpan], className: node.properties.className });
              tree.splice(index + 1, 0, newElem);
            } else {
              newTree.push(createLineElement({ children: [newChild], lineNumber: lineNumber, lineStyle: lineStyle }));
            }
          } else {
            newTree.push(createLineElement({ children: [newChild], lineNumber: lineNumber, lineStyle: lineStyle }));
          }
        });
        lastLineBreakIndex = index;
      })();
    }
    index++;
  };

  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      newTree.push(createLineElement({ children: children, lineNumber: newTree.length + 1, lineStyle: lineStyle }));
    }
  }
  return newTree;
}

function defaultRenderer(_ref4) {
  var rows = _ref4.rows,
      stylesheet = _ref4.stylesheet,
      useInlineStyles = _ref4.useInlineStyles;

  return rows.map(function (node, i) {
    return (0, _createElement2.default)({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: 'code-segement' + i
    });
  });
}

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _javascript = __webpack_require__(593);

var _javascript2 = _interopRequireDefault(_javascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _javascript2.default;

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerLanguage = undefined;

var _highlight = __webpack_require__(845);

var _highlight2 = _interopRequireDefault(_highlight);

var _core = __webpack_require__(803);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerLanguage = exports.registerLanguage = _core2.default.registerLanguage;
exports.default = (0, _highlight2.default)(_core2.default, {});

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "hljs": {
        "display": "block",
        "overflowX": "auto",
        "padding": "0.5em",
        "background": "white",
        "color": "black"
    },
    "hljs-string": {
        "color": "#888"
    },
    "hljs-variable": {
        "color": "#888"
    },
    "hljs-template-variable": {
        "color": "#888"
    },
    "hljs-symbol": {
        "color": "#888"
    },
    "hljs-bullet": {
        "color": "#888"
    },
    "hljs-section": {
        "color": "#888",
        "fontWeight": "bold"
    },
    "hljs-addition": {
        "color": "#888"
    },
    "hljs-attribute": {
        "color": "#888"
    },
    "hljs-link": {
        "color": "#888"
    },
    "hljs-comment": {
        "color": "#ccc"
    },
    "hljs-quote": {
        "color": "#ccc"
    },
    "hljs-meta": {
        "color": "#ccc"
    },
    "hljs-deletion": {
        "color": "#ccc"
    },
    "hljs-keyword": {
        "fontWeight": "bold"
    },
    "hljs-selector-tag": {
        "fontWeight": "bold"
    },
    "hljs-name": {
        "fontWeight": "bold"
    },
    "hljs-type": {
        "fontWeight": "bold"
    },
    "hljs-strong": {
        "fontWeight": "bold"
    },
    "hljs-emphasis": {
        "fontStyle": "italic"
    }
};

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(463);


/***/ })

},[968]);
            return { page: comp.default }
          })
        