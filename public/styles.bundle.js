webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    margin: 0 !important;\n    padding: 0 !important;\n    font-family: 'Roboto';\n}\n\n/*----------------------------------------- General ------------------------------------------top*/\n.msg {\n    font-size: 20px;\n    color: rgba(50, 50, 50, 0.9);\n    text-align: center;\n    font-family: 'Roboto';\n    width: 40%;\n    height: auto;\n    padding: 0.5mm 0mm !important;\n    display: block;\n    margin: 0.5mm auto 0.5mm auto !important;\n    border-radius: 2mm;\n}\n\n.msg-danger {\n    background-color: rgba(247, 47, 47, 0.2);\n    border: 0.5mm solid rgba(247, 47, 47, 1);\n}\n\n.msg-accept {\n    background-color: rgba(20, 247, 20, 0.2);\n    border: 0.5mm solid rgba(20, 247, 20, 1);\n}\n\n.msg-caution {\n    background-color: rgba(231, 146, 18, 0.2);\n    border: 0.5mm solid rgba(231, 146, 18, 1);\n}\n\n.btn {\n    padding: 1mm 2mm !important;\n    font-size: 80%;\n    border: none;\n    border-radius: 2mm;\n    cursor: pointer;\n}\n\n.btn-def {\n    background-color: rgba(40, 87, 126, 1);\n    transition: color 250ms, background-color 250ms;\n}\n\n.btn-def:hover {\n    background-color: rgba(64, 130, 184, 1);\n    color: rgba(240, 240, 240, 0.8);\n}\n\n.btn-def:active {\n    background-color: rgba(64, 130, 184, 0.6);\n}\n\n.btn-go {\n    background-color: rgba(53, 172, 91, 1);\n    transition: color 250ms, background-color 250ms;\n}\n\n.btn-go:hover {\n    background-color: rgba(66, 209, 111, 1);\n    color: rgba(240, 240, 240, 0.8);\n}\n\n.btn-go:active {\n    background-color: rgba(66, 209, 111, 0.6);\n}\n\n.btn-danger {\n    background-color: rgba(172, 53, 53, 1);\n    transition: color 250ms, background-color 250ms;\n}\n\n.btn-danger:hover {\n    background-color: rgba(177, 34, 34, 1);\n    color: rgba(240, 240, 240, 0.8);\n}\n\n.btn-danger:active {\n    background-color: rgba(177, 34, 34, 0.6);\n}\n/*----------------------------------------- General ---------------------------------------bottom*/\n\n\n/*----------------------------------------- Navbar -----------------------------------------top*/\n.My-navbar {\n    width: 100%;\n    height: 75px;\n    color: rgba(255, 255, 255, 0.9);\n    background-color: rgba(50, 50, 50, 1);\n    font-size: 28px !important;\n    position: relative;\n    top: 0%;\n    left: 0%;\n    overflow: visible !important;\n    font-family: 'Roboto';\n    z-index: 5;\n}\n\n.My-navbar .nav-toggler {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    top: 15%;\n    right: 5mm;\n    background: none;\n    border: none;\n    border-radius: 200px;\n    display: none;\n}\n\n.My-navbar .nav-toggler:focus {\n    outline: none;\n}\n\n.My-navbar .nav-toggler i {\n    color: rgba(255, 255, 255, 0.9);\n}\n\na {\n    text-decoration: none;\n}\n\n.My-navbar .logo-route {\n    color: inherit;\n    width: 30%;\n    font-size: 100%;\n    font-weight: 600;\n    padding-left: 10mm !important;\n    padding-top: 5mm !important;\n    float: left;\n}\n\n.My-navbar .logo-route:hover {\n    border: none !important;\n    text-decoration: none !important;\n}\n\n.My-navbar .nav-container {\n    width: 67%;\n    height: 100%;\n    float: left;\n    display: block;\n    /* outline: red solid; */\n}\n\n.My-navbar .nav-routes-left {\n    float: left;\n    /* width: 15% !important; */\n}\n\n.My-navbar .nav-routes-left li {\n    float: left;\n}\n\n.My-navbar .nav-routes-right {\n    float: right;\n    /* width: 83% !important; */\n}\n\n.My-navbar .nav-container .nav-routes-right article {\n    float: right;\n    height: 100%;\n}\n\n.My-navbar .nav-container .nav-routes-right li {\n    float: left;\n    /*display: inline;\n    position: relative;\n    right: -90%;*/\n}\n\n.My-navbar .nav-container .nav-routes {\n    list-style-type: none;\n    /* width: 50%; */\n    height: 100%;\n    /* outline: blue solid; */\n}\n\n.My-navbar .nav-container .nav-routes .route-item {\n    font-size: 60%;\n    height: 100%;\n    width: 22mm;\n    text-align: center;\n    padding: 0mm 0.5mm !important;\n    transition: background-color 250ms;\n}\n\n.My-navbar .nav-container .nav-routes .route-item .route {\n    color: inherit !important;\n    position: relative;\n    top: 9mm !important;\n    border-bottom: 1px solid;\n    border-color: transparent;\n    transition: border-color 250ms, opacity 250ms;\n}\n\n.My-navbar .nav-container .nav-routes .route-item .route:hover {\n    border-color: rgba(255, 255, 255, 0.9);\n    opacity: 0.5;\n}\n\n.active {\n    background-color: rgba(80, 80, 80, 0.5) !important;\n}\n\n/*----------------------------------------- Navbar --------------------------------------bottom*/\n\n\n/*----------------------------------------- Home -----------------------------------------top*/\n* {\n    margin: 0 !important;\n    padding: 0 !important;\n    font-family: 'Roboto';\n}\n\nhtml {\n    position: relative;\n    top: 0%;\n    left: 0%;\n}\n\n.HomeContainer {\n    width: 100%;\n    height: auto;\n    padding: 5mm 0mm !important;\n    color: rgba(50, 50, 50, 0.9);\n}\n\n.HomeContainer>.top-sect {\n    width: 85%;\n    height: auto;\n    padding: 15mm 5mm !important;\n    margin: 2mm auto 20mm auto !important;\n    background-color: rgba(253, 232, 213, 0.3);\n    position: relative;\n}\n\n.HomeContainer .top-sect h1 {\n    font-size: 40px;\n    text-align: center;\n    margin: 1mm 0mm !important;\n}\n\n.HomeContainer .top-sect label {\n    font-size: 24px;\n    display: block;\n    margin: 2mm auto !important;\n    text-align: center;\n}\n\n.btn-container {\n    width: 160px;\n    height: auto;\n    margin: 4mm auto 0mm auto !important;\n}\n\n.HomeContainer .top-sect .btn-container .route-btn {\n    padding: 2mm !important;\n    border: none;\n    border-radius: 1.5mm;\n    margin-right: 1mm;\n    font-size: 20px;\n    text-align: center;\n    cursor: pointer;\n}\n\n.HomeContainer .top-sect .btn-container .route-btn:focus {\n    outline: none;\n}\n\n.HomeContainer .top-sect .btn-container .route-btn .btn-route {\n    color: inherit;\n    text-decoration: none;\n    margin: auto;\n}\n\n.HomeContainer .top-sect .btn-container .route-btn .btn-route:hover {\n    color: rgba(240, 240, 240, 0.8);\n}\n\n.HomeContainer .top-sect .btn-container .route-btn .btn-route:focus {\n    outline: none;\n}\n\n\n/*.btn-def {\n    background-color: rgba(45, 54, 92, 1);\n    transition: color 250ms, background-color 250ms;\n}\n\n.btn-def:hover {\n    background-color: rgba(69, 82, 134, 1);\n    color: rgba(240, 240, 240, 0.8);\n}\n\n.btn-def:active {\n    background-color: rgba(69, 82, 134, 0.6);\n}\n\n.btn-go {\n    background-color: rgba(53, 172, 91, 1);\n    transition: color 250ms, background-color 250ms;\n}\n\n.btn-go:hover {\n    background-color: rgba(66, 209, 111, 1);\n    color: rgba(240, 240, 240, 0.8);\n}\n\n.btn-go:active {\n    background-color: rgba(66, 209, 111, 0.6);\n}*/\n\n.sect-title {\n    text-align: center;\n    font-weight: 800;\n    margin: 2% 0% 1% 0%;\n    font-size: 26px;\n}\n\n.sect-title hr {\n    margin: 0mm auto 4mm auto !important;\n    width: 50%;\n}\n\n.sect-title hr:first-of-type {\n    width: 70%;\n}\n\n.HomeContainer .third-container {\n    width: 100%;\n    height: auto;\n    background-color: ghost-white;\n}\n\n.HomeContainer .third-container .third-wrap {\n    margin: auto !important;\n    width: 90%;\n    margin-bottom: 10px;\n    overflow: hidden;\n    font-size: 22px;\n}\n\n.HomeContainer .third-container .one-third {\n    float: left;\n    width: 30%;\n    padding-bottom: 30px;\n    height: auto;\n    margin: 20px 12px !important;\n}\n\n.HomeContainer .third-container .one-third p {\n    margin: auto;\n    text-align: center;\n    width: 96%;\n    font-size: 80%;\n}\n\n@media screen and (max-width: 1040px) {\n    .HomeContainer .third-container .one-third {\n        margin: 0.35% !important;\n    }\n    .HomeContainer .third-container .one-third p {\n        font-size: 75%;\n    }\n}\n\n@media screen and (max-width: 790px) {\n    .HomeContainer .third-container .one-third p {\n        font-size: 90%;\n    }\n    .HomeContainer .third-container .one-third {\n        width: 46%;\n    }\n}\n\n@media screen and (max-width: 790px) {\n    .HomeContainer .third-container .one-third p {\n        font-size: 90%;\n    }\n    .HomeContainer .third-container .one-third {\n        width: 46%;\n    }\n}\n\n@media screen and (max-width: 415px) {\n    .HomeContainer .top-sect {\n        width: 100%;\n        padding: 2mm 0mm 4mm 0mm !important;\n        margin-bottom: 4mm !important;\n    }\n    .HomeContainer .top-sect>label {\n        margin-top: 4mm !important;\n        width: 80%;\n    }\n    .HomeContainer .third-container .one-third p {\n        font-size: 80%;\n    }\n    .HomeContainer .third-container .one-third {\n        width: 98%;\n        margin: 2mm auto !important;\n    }\n}\n\n@media screen and (max-width: 380px) {\n    .HomeContainer .top-sect>h1 {\n        font-size: 36px;\n    }\n    .HomeContainer .top-sect>label {\n        font-size: 21px;\n        width: 85%;\n    }\n}\n\n@media screen and (max-width: 330px) {\n    .HomeContainer .top-sect>h1 {\n        font-size: 32px;\n    }\n    .HomeContainer .top-sect>label {\n        font-size: 20px;\n    }\n}\n/*----------------------------------------- Home --------------------------------------bottom*/\n\n\n/*----------------------------------------- Register -----------------------------------------top*/\n\n/*----------------------------------------- Register -----------------------------------------top*/\n\n/*----------------------------------------- Form Styles --------------------------------------top*/\n.default-form {\n    width: 500px;\n    height: auto;\n    display: block;\n    padding: 2mm 0mm !important;\n    margin: auto !important;\n    font-size: 28px;\n    color: rgba(50, 50, 50, 0.9);\n    font-size: 32px;\n}\n\n.default-form .form-header {\n    width: 100%;\n    text-align: center;\n    display: block;\n    margin: 1mm auto !important;\n    font-size: 100%;\n}\n\n.default-form hr {\n    width: 60%;\n    display: block;\n    margin: auto !important;\n    border: none;\n    border-bottom: 1px solid;\n}\n\n.default-form .data-table {\n    width: 100%;\n    height: auto;\n}\n\n.default-form .data-table tr {\n    width: 100%;\n    height: auto;\n}\n\n.default-form .data-table tr td {\n    width: 100%;\n    height: auto;\n    padding: 2px !important;\n}\n\n.default-form .data-table tr td label {\n    width: 100%;\n    text-align: center;\n    display: block;\n    margin: 0.5mm auto !important;\n    font-size: 70%;\n}\n\n.default-form .data-table tr td input {\n    width: 90%;\n    height: 24px;\n    padding: 2px 4px !important;\n    display: block;\n    margin: auto !important;\n    font-size: 70%;\n}\n\n.default-form .data-table tr td textarea {\n    width: 90%;\n    height: 100px;\n    padding: 2px 4px !important;\n    display: block;\n    margin: auto !important;\n    font-size: 70%;\n    resize: none;\n}\n\n.default-form .data-table tr td select {\n    width: 92%;\n    height: 35px;\n    padding: 2px 4px !important;\n    display: block;\n    margin: auto !important;\n    font-size: 70%;\n}\n\n.default-form .form-btn {\n    float: right;\n    margin: 2mm 7mm 2mm 0mm !important;\n}\n\n.default-form .form-btn:focus {\n    outline: none;\n}\n\n.btn {\n    padding: 1mm 2mm !important;\n}\n/*----------------------------------------- Form Styles -----------------------------------bottom*/\n\n/*----------------------------------------- Login -----------------------------------------top*/\n\n/*----------------------------------------- Login --------------------------------------bottom*/\n\n\n/*----------------------------------------- Dashboard -----------------------------------------top*/\n.dashboard {\n    width: 85%;\n    height: auto;\n    padding: 15mm 5mm !important;\n    margin: 2mm auto 20mm auto !important;\n    position: relative;\n}\n\n.dashboard .page-title {\n    font-size: 40px;\n    text-align: center;\n    margin: 1mm 0mm !important;\n}\n\n.dashboard .dash-message {\n    font-size: 20px;\n    display: block;\n    margin: 5mm auto !important;\n    padding-left: 3mm !important;\n}\n\n.newTask-form{\n    width: 700px;\n    margin-left: 0 !important;\n    padding-bottom: 15mm !important;\n    border-collapse: separate;\n    border-spacing: 5mm;\n    position: relative;\n    top: 5mm;\n}\n\n.btn:active{\n    outline: none;\n}\n\n.newTask-form tr{\n    margin-bottom: 20mm !important;\n}\n\n.newTask-form hr{\n    display: block;\n    margin-bottom: 2mm !important;\n}\n\n.newTask-form tr td{\n    width: 80%;\n    font-size: 24px;\n}\n\n.newTask-form tr td:first-of-type{\n    width: 20%;\n}\n\n.newTask-form tr label{\n    text-align: left !important;\n}\n\n.newTask-form .btn-go{\n    padding: 1mm !important;\n    font-size: 20px;\n    margin-right: 12mm !important;\n}\n\n.Task {\n    margin-bottom: 5mm !important;\n    width: 600px;\n}\n\n.No-Task{\n    display: block;\n    margin-top: 10mm !important;\n}\n\n.Tasks .header {\n    display: inline !important;\n    padding: 0mm 2mm 0mm 10mm !important;\n    font-size: 26px !important;\n    position: relative;\n    top:5mm;\n}\n\n#task-title {\n    margin-top: 12mm !important;\n    transition: background-color 250ms;\n    cursor: pointer;\n}\n\n#task-title tr td{\n    cursor: pointer;\n}\n\n#task-title tr {\n    transition: background-color 250ms;\n}\n\n#task-title tr td:first-of-type:hover {\n    background-color: rgba(0,0,0,0.05);\n}\n\n#task-title tr td label{\n    cursor: pointer;\n}\n\n.Task-data {\n    padding-top: 5mm !important;\n    margin: auto !important;\n    width: 80%;\n    /*border: 1px solid;*/\n}\n\n.Task-data tr {\n    width: 100%;\n}\n\n.Task-data tr td:first-of-type{\n    vertical-align: top;\n}\n\n.Task-data tr td{\n    width: 49%;\n    text-align: left;\n    /*outline: blue solid;*/\n}\n\n#task-info tr td {\n    display: inline-block;\n}\n\n#task-info tr{\n    display: inline-block;\n    margin-bottom: 3mm !important;\n    /*outline: red solid;*/\n}\n\n.Task-data tr td pre{\n    white-space: pre-wrap;\n    white-space: -moz-pre-wrap;\n    white-space: -pre-wrap;\n    white-space: -o-pre-wrap;\n    word-wrap: break-word;\n    width: 215;\n    margin-left: 5mm !important;\n}\n\n.Tasks .add-btn, .Tasks .Task-data .btn, .Tasks .upTask .btn{\n    padding: 0 !important;\n    font-size: 60%;\n    border-radius: 1mm !important;\n}\n\n.Tasks .add-btn{\n    line-height: 10px;\n    position: relative;\n    top: 5.75mm !important;\n}\n\n.Tasks .add-btn, .Tasks .Task-data .btn i, .Tasks .upTask .btn i{\n    font-size: 18px;\n}\n\n.task-btn{\n    background: transparent;\n    background-color: transparent;\n}\n\n.task-delete-btn i {\n    color: rgba(250,0,0,0.5);\n    transition: color 250ms;\n}\n\n.task-delete-btn i:hover{\n    color: rgba(255,5,5,1);\n}\n\n.dashboard .dash-message i {\n    font-size: 20px;\n}\n\n/*----------------------------------------- Dashboard --------------------------------------bottom*/\n\n\n/*----------------------------------------- Media Queries -----------------------------------------top*/\n\n/*----------------------------------------- Media Queries --------------------------------------bottom*/\n\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map