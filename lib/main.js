'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// document.querySelector等がimportされる側で期待通りに機能しないので↓のようにしてcurrentDocumentをdocumentの代わりに使用する。
var currentDocument = document.currentScript.ownerDocument;

var templates = {};

// 各カスタム要素のクラスを定義する

// 共通処理を定義しておくベースクラス

var ExElement = function (_HTMLElement) {
    _inherits(ExElement, _HTMLElement);

    _createClass(ExElement, null, [{
        key: 'is',

        // 自分のタグ名を返す。必ずオーバーライドする。
        get: function get() {
            return 'ex-element';
        }

        // ここで返した名前の属性に変更があるとattributeChangedCallback()メソッドをブラウザが呼んでくれる。

    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['hidden'];
        }
    }]);

    function ExElement() {
        _classCallCheck(this, ExElement);

        var _this = _possibleConstructorReturn(this, (ExElement.__proto__ || Object.getPrototypeOf(ExElement)).call(this));

        _this._style = {};
        _this._style.display = _this.style.display; // displayの初期値を保存

        ShadyCSS.styleElement(_this);
        if (!_this.shadowRoot) {
            _this.attachShadow({ mode: 'open' });
            _this.shadowRoot.appendChild(currentDocument.importNode(templates[_this.constructor.is].content, true));
        }
        _this.syncHidden();
        return _this;
    }

    // hidden属性とdisplay:noneを紐付ける処理用のヘルパーメソッド
    // もっといい書き方があるかも？


    _createClass(ExElement, [{
        key: 'syncHidden',
        value: function syncHidden() {
            this.style.display = this.hasAttribute('hidden') ? 'none' : this._style.display;
        }

        // observedAttributes()で返した属性に変更があるとこのメソッドがブラウザから呼ばれる。

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'hidden':
                    this.syncHidden();
                    break;
            }
        }
    }]);

    return ExElement;
}(HTMLElement);

// name: ex-layout-center


var ExLayoutCenter = function (_ExElement) {
    _inherits(ExLayoutCenter, _ExElement);

    _createClass(ExLayoutCenter, null, [{
        key: 'is',
        get: function get() {
            return 'ex-layout-center';
        }
    }]);

    function ExLayoutCenter() {
        _classCallCheck(this, ExLayoutCenter);

        return _possibleConstructorReturn(this, (ExLayoutCenter.__proto__ || Object.getPrototypeOf(ExLayoutCenter)).call(this));
    }

    return ExLayoutCenter;
}(ExElement);

// name: ex-name


var ExName = function (_ExElement2) {
    _inherits(ExName, _ExElement2);

    _createClass(ExName, null, [{
        key: 'is',
        get: function get() {
            return 'ex-name';
        }
    }]);

    function ExName() {
        _classCallCheck(this, ExName);

        return _possibleConstructorReturn(this, (ExName.__proto__ || Object.getPrototypeOf(ExName)).call(this));
    }

    return ExName;
}(ExElement);

// name: ex-icon
// attributes:
//   * src - 表示する画像のURL


var ExIcon = function (_ExElement3) {
    _inherits(ExIcon, _ExElement3);

    _createClass(ExIcon, null, [{
        key: 'is',
        get: function get() {
            return 'ex-icon';
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ExElement.observedAttributes.concat(['src']);
        }
    }]);

    function ExIcon() {
        _classCallCheck(this, ExIcon);

        var _this4 = _possibleConstructorReturn(this, (ExIcon.__proto__ || Object.getPrototypeOf(ExIcon)).call(this));

        _this4._src = '';

        if (_this4.hasAttribute('src')) {
            _this4.src = _this4.getAttribute('src');
        }
        return _this4;
    }

    _createClass(ExIcon, [{
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'src':
                    this.src = newValue;
                    break;
                default:
                    _get(ExIcon.prototype.__proto__ || Object.getPrototypeOf(ExIcon.prototype), 'attributeChangedCallback', this).call(this, name);
            }
        }
    }, {
        key: 'src',
        get: function get() {
            return this._src;
        },
        set: function set(newValue) {
            this._src = newValue;

            // thisの属性に反映させる時はattributeChangedCallbackが呼ばれることよる無限ループを回避する為に必ず違う値であることを確認する。
            if (this.getAttribute('src') !== this._src) {
                this.setAttribute('src', this._src);
            }

            // ShadowDOM内の要素に新しい値を反映
            this.shadowRoot.querySelector('img').setAttribute('src', this._src);

            return this._src;
        }
    }]);

    return ExIcon;
}(ExElement);

var components = [ExLayoutCenter, ExName, ExIcon];

// ShadyCSSで非対応ブラウザ用にテンプレートを初期化する呪文と、カスタムタグとして使用できるようにdefineメソッドで登録、を一緒に行う
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elementClass = _step.value;

        templates[elementClass.is] = currentDocument.querySelector('template#' + elementClass.is);
        window.ShadyCSS.prepareTemplate(templates[elementClass.is], elementClass.is);
        window.customElements.define(elementClass.is, elementClass);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}