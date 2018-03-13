require("babel-polyfill");

// document.querySelector等がimportされる側で期待通りに機能しないので↓のようにしてcurrentDocumentをdocumentの代わりに使用する。
const currentDocument = document.currentScript.ownerDocument;

const templates = {};

// 各カスタム要素のクラスを定義する

// 共通処理を定義しておくベースクラス
class ExElement extends HTMLElement {
    // 自分のタグ名を返す。必ずオーバーライドする。
    static get is() {
        return 'ex-element';
    }

    // ここで返した名前の属性に変更があるとattributeChangedCallback()メソッドをブラウザが呼んでくれる。
    static get observedAttributes() {
        return ['hidden'];
    }

    constructor() {
        super();

        this._style = {};
        this._style.display = this.style.display; // displayの初期値を保存

        ShadyCSS.styleElement(this);
        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(currentDocument.importNode(templates[this.constructor.is].content, true));
        }
        this.syncHidden();
    }

    // hidden属性とdisplay:noneを紐付ける処理用のヘルパーメソッド
    // もっといい書き方があるかも？
    syncHidden() {
        this.style.display = this.hasAttribute('hidden') ? 'none' : this._style.display;
    }

    // observedAttributes()で返した属性に変更があるとこのメソッドがブラウザから呼ばれる。
    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'hidden':
                this.syncHidden();
                break;
        }
    }
}

// name: ex-layout-center
class ExLayoutCenter extends ExElement {
    static get is() {
        return 'ex-layout-center';
    }

    constructor() {
        super();
    }
}

// name: ex-name
class ExName extends ExElement {
    static get is() {
        return 'ex-name';
    }

    constructor() {
        super();
    }
}

// name: ex-icon
// attributes:
//   * src - 表示する画像のURL
class ExIcon extends ExElement {
    static get is() {
        return 'ex-icon';
    }

    static get observedAttributes() {
        return ExElement.observedAttributes.concat(['src']);
    }

    constructor() {
        super();

        this._src = '';

        if (this.hasAttribute('src')) {
            this.src = this.getAttribute('src');
        }
    }

    get src() {
        return this._src;
    }

    set src(newValue) {
        this._src = newValue;

        // thisの属性に反映させる時はattributeChangedCallbackが呼ばれることよる無限ループを回避する為に必ず違う値であることを確認する。
        if (this.getAttribute('src') !== this._src) {
            this.setAttribute('src', this._src);
        }

        // ShadowDOM内の要素に新しい値を反映
        this.shadowRoot.querySelector('img').setAttribute('src', this._src);

        return this._src;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'src':
                this.src = newValue;
                break;
            default:
                super.attributeChangedCallback(name);
        }
    }
}

const components = [
    ExLayoutCenter,
    ExName,
    ExIcon
];

// ShadyCSSで非対応ブラウザ用にテンプレートを初期化する呪文と、カスタムタグとして使用できるようにdefineメソッドで登録、を一緒に行う
for (const elementClass of components) {
    templates[elementClass.is] = currentDocument.querySelector(`template#${elementClass.is}`);
    window.ShadyCSS.prepareTemplate(templates[elementClass.is], elementClass.is);
    window.customElements.define(elementClass.is, elementClass);
}

