// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2REvP":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "de691037788dfe1d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"45gvb":[function(require,module,exports) {
var _tinySlider = require("tiny-slider");
(function() {
    "use strict";
    //===== Preloader
    // window.onload = function () {
    //   window.setTimeout(fadeout, 500);
    // }
    // function fadeout() {
    //   document.querySelector('#preloader').style.opacity = '0';
    //   document.querySelector('#preloader').style.display = 'none';
    // }
    /*=====================================
        Sticky
        ======================================= */ window.onscroll = function() {
        const header_navbar = document.querySelector(".navigation");
        const sticky = header_navbar?.offsetTop || 0;
        if (window.pageYOffset > sticky) header_navbar.classList.add("sticky");
        else header_navbar.classList.remove("sticky");
        // show or hide the back-to-top button
        const backToTop = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            if (backToTop !== null && backToTop !== undefined) backToTop.style.display = "flex";
        } else if (backToTop !== null && backToTop !== undefined) backToTop.style.display = "none";
    };
    // Get the navbar
    // for menu scroll
    const pageLink = document.querySelectorAll(".page-scroll");
    pageLink.forEach((elem)=>{
        elem.addEventListener("click", (e)=>{
            e.preventDefault();
            const _href = elem.getAttribute("href") || "";
            document.querySelector(_href)?.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    // section menu active
    function onScroll(event) {
        const sections = document.querySelectorAll(".page-scroll");
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for(let i = 0; i < sections.length; i++){
            let currLink = sections[i];
            let val = currLink.getAttribute("href") || "";
            let refElement = document.querySelector(val);
            let scrollTopMinus = scrollPos + 73;
            if ((refElement?.offsetTop || 0) <= scrollTopMinus && (refElement?.offsetTop || 0) + (refElement?.offsetHeight || 0) > scrollTopMinus) {
                document.querySelector(".page-scroll")?.classList.remove("active");
                currLink.classList.add("active");
            } else currLink.classList.remove("active");
        }
    }
    window.document.addEventListener("scroll", onScroll);
    //===== close navbar-collapse when a  clicked
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    document.querySelectorAll(".page-scroll").forEach((e)=>e.addEventListener("click", ()=>{
            console.log(e, "test");
            if (navbarToggler !== null) navbarToggler?.classList?.remove("active");
            if (navbarCollapse !== null) navbarCollapse?.classList?.remove("show");
        }));
    if (navbarToggler !== null) navbarToggler.addEventListener("click", function() {
        console.log("test");
        navbarToggler?.classList?.toggle("active");
        if (navbarCollapse !== null) navbarCollapse?.classList?.toggle("show");
    });
    const hero = document.getElementById("hero-area");
    if (hero !== null && hero !== undefined) {
        console.log(hero);
        (0, _tinySlider.tns)({
            container: ".services-carousel",
            items: 3,
            slideBy: "page",
            lazyload: true,
            mouseDrag: true,
            gutter: 30,
            nav: true,
            navPosition: "bottom",
            controls: false,
            autoplay: true,
            autoplayButton: false,
            autoplayText: [
                "\u25B6\uFE0F start",
                "\u23F9\uFE0F stop"
            ],
            autoplayTimeout: 7500,
            responsive: {
                0: {
                    items: 1
                },
                765: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
//WOW Scroll Spy
// const wow = new WOW({
//   //disabled for mobile
//   mobile: false,
// });
// wow.init();
// AOS.init();
})();

},{"tiny-slider":"hw4TK"}],"hw4TK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var win$1 = window;
var raf = win$1.requestAnimationFrame || win$1.webkitRequestAnimationFrame || win$1.mozRequestAnimationFrame || win$1.msRequestAnimationFrame || function(cb) {
    return setTimeout(cb, 16);
};
var win = window;
var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function(id) {
    clearTimeout(id);
};
function extend() {
    var obj, name, copy, target = arguments[0] || {}, i = 1, length = arguments.length;
    for(; i < length; i++){
        if ((obj = arguments[i]) !== null) for(name in obj){
            copy = obj[name];
            if (target === copy) continue;
            else if (copy !== undefined) target[name] = copy;
        }
    }
    return target;
}
function checkStorageValue(value) {
    return [
        "true",
        "false"
    ].indexOf(value) >= 0 ? JSON.parse(value) : value;
}
function setLocalStorage(storage, key, value, access) {
    if (access) try {
        storage.setItem(key, value);
    } catch (e) {}
    return value;
}
function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;
    return "tns" + window.tnsId;
}
function getBody() {
    var doc = document, body = doc.body;
    if (!body) {
        body = doc.createElement("body");
        body.fake = true;
    }
    return body;
}
var docElement = document.documentElement;
function setFakeBody(body) {
    var docOverflow = "";
    if (body.fake) {
        docOverflow = docElement.style.overflow; //avoid crashing IE8, if background image is used
        body.style.background = ""; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
        body.style.overflow = docElement.style.overflow = "hidden";
        docElement.appendChild(body);
    }
    return docOverflow;
}
function resetFakeBody(body, docOverflow) {
    if (body.fake) {
        body.remove();
        docElement.style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+
        // eslint-disable-next-line
        docElement.offsetHeight;
    }
}
// get css-calc 
function calc() {
    var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), result = false;
    body.appendChild(div);
    try {
        var str = "(10px * 10)", vals = [
            "calc" + str,
            "-moz-calc" + str,
            "-webkit-calc" + str
        ], val;
        for(var i = 0; i < 3; i++){
            val = vals[i];
            div.style.width = val;
            if (div.offsetWidth === 100) {
                result = val.replace(str, "");
                break;
            }
        }
    } catch (e) {}
    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
    return result;
}
// get subpixel support value
function percentageLayout() {
    // check subpixel layout supporting
    var doc = document, body = getBody(), docOverflow = setFakeBody(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count = 70, perPage = 3, supported = false;
    wrapper.className = "tns-t-subp2";
    outer.className = "tns-t-ct";
    for(var i = 0; i < count; i++)str += "<div></div>";
    outer.innerHTML = str;
    wrapper.appendChild(outer);
    body.appendChild(wrapper);
    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
    body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
    return supported;
}
function mediaquerySupport() {
    if (window.matchMedia || window.msMatchMedia) return true;
    var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), style = doc.createElement("style"), rule = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", position;
    style.type = "text/css";
    div.className = "tns-mq-test";
    body.appendChild(style);
    body.appendChild(div);
    if (style.styleSheet) style.styleSheet.cssText = rule;
    else style.appendChild(doc.createTextNode(rule));
    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle["position"];
    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
    return position === "absolute";
}
// create and append style sheet
function createStyleSheet(media, nonce) {
    // Create the <style> tag
    var style = document.createElement("style"); // style.setAttribute("type", "text/css");
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")
    if (media) style.setAttribute("media", media);
     // Add nonce attribute for Content Security Policy
    if (nonce) style.setAttribute("nonce", nonce);
     // WebKit hack :(
    // style.appendChild(document.createTextNode(""));
    // Add the <style> element to the page
    document.querySelector("head").appendChild(style);
    return style.sheet ? style.sheet : style.styleSheet;
}
// cross browsers addRule method
function addCSSRule(sheet, selector, rules, index) {
    // return raf(function() {
    "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index); // });
}
// cross browsers addRule method
function removeCSSRule(sheet, index) {
    // return raf(function() {
    "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index); // });
}
function getCssRulesLength(sheet) {
    var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
    return rule.length;
}
function toDegree(y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
}
function getTouchDirection(angle, range) {
    var direction = false, gap = Math.abs(90 - Math.abs(angle));
    if (gap >= 90 - range) direction = "horizontal";
    else if (gap <= range) direction = "vertical";
    return direction;
}
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach(arr, callback, scope) {
    for(var i = 0, l = arr.length; i < l; i++)callback.call(scope, arr[i], i);
}
var classListSupport = "classList" in document.createElement("_");
var hasClass = classListSupport ? function(el, str) {
    return el.classList.contains(str);
} : function(el, str) {
    return el.className.indexOf(str) >= 0;
};
var addClass = classListSupport ? function(el, str) {
    if (!hasClass(el, str)) el.classList.add(str);
} : function(el, str) {
    if (!hasClass(el, str)) el.className += " " + str;
};
var removeClass = classListSupport ? function(el, str) {
    if (hasClass(el, str)) el.classList.remove(str);
} : function(el, str) {
    if (hasClass(el, str)) el.className = el.className.replace(str, "");
};
function hasAttr(el, attr) {
    return el.hasAttribute(attr);
}
function getAttr(el, attr) {
    return el.getAttribute(attr);
}
function isNodeList(el) {
    // Only NodeList has the "item()" function
    return typeof el.item !== "undefined";
}
function setAttrs(els, attrs) {
    els = isNodeList(els) || els instanceof Array ? els : [
        els
    ];
    if (Object.prototype.toString.call(attrs) !== "[object Object]") return;
    for(var i = els.length; i--;)for(var key in attrs)els[i].setAttribute(key, attrs[key]);
}
function removeAttrs(els, attrs) {
    els = isNodeList(els) || els instanceof Array ? els : [
        els
    ];
    attrs = attrs instanceof Array ? attrs : [
        attrs
    ];
    var attrLength = attrs.length;
    for(var i = els.length; i--;)for(var j = attrLength; j--;)els[i].removeAttribute(attrs[j]);
}
function arrayFromNodeList(nl) {
    var arr = [];
    for(var i = 0, l = nl.length; i < l; i++)arr.push(nl[i]);
    return arr;
}
function hideElement(el, forceHide) {
    if (el.style.display !== "none") el.style.display = "none";
}
function showElement(el, forceHide) {
    if (el.style.display === "none") el.style.display = "";
}
function isVisible(el) {
    return window.getComputedStyle(el).display !== "none";
}
function whichProperty(props) {
    if (typeof props === "string") {
        var arr = [
            props
        ], Props = props.charAt(0).toUpperCase() + props.substr(1), prefixes = [
            "Webkit",
            "Moz",
            "ms",
            "O"
        ];
        prefixes.forEach(function(prefix) {
            if (prefix !== "ms" || props === "transform") arr.push(prefix + Props);
        });
        props = arr;
    }
    var el = document.createElement("fakeelement");
    props.length;
    for(var i = 0; i < props.length; i++){
        var prop = props[i];
        if (el.style[prop] !== undefined) return prop;
    }
    return false; // explicit for ie9-
}
function has3DTransforms(tf) {
    if (!tf) return false;
    if (!window.getComputedStyle) return false;
    var doc = document, body = getBody(), docOverflow = setFakeBody(body), el = doc.createElement("p"), has3d, cssTF = tf.length > 9 ? "-" + tf.slice(0, -9).toLowerCase() + "-" : "";
    cssTF += "transform"; // Add it to the body to get the computed style
    body.insertBefore(el, null);
    el.style[tf] = "translate3d(1px,1px,1px)";
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
    body.fake ? resetFakeBody(body, docOverflow) : el.remove();
    return has3d !== undefined && has3d.length > 0 && has3d !== "none";
}
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
    var endProp = false;
    if (/^Webkit/.test(propIn)) endProp = "webkit" + propOut + "End";
    else if (/^O/.test(propIn)) endProp = "o" + propOut + "End";
    else if (propIn) endProp = propOut.toLowerCase() + "end";
    return endProp;
}
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function() {
            supportsPassive = true;
        }
    });
    window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? {
    passive: true
} : false;
function addEvents(el, obj, preventScrolling) {
    for(var prop in obj){
        var option = [
            "touchstart",
            "touchmove"
        ].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
        el.addEventListener(prop, obj[prop], option);
    }
}
function removeEvents(el, obj) {
    for(var prop in obj){
        var option = [
            "touchstart",
            "touchmove"
        ].indexOf(prop) >= 0 ? passiveOption : false;
        el.removeEventListener(prop, obj[prop], option);
    }
}
function Events() {
    return {
        topics: {},
        on: function(eventName, fn) {
            this.topics[eventName] = this.topics[eventName] || [];
            this.topics[eventName].push(fn);
        },
        off: function(eventName, fn) {
            if (this.topics[eventName]) {
                for(var i = 0; i < this.topics[eventName].length; i++)if (this.topics[eventName][i] === fn) {
                    this.topics[eventName].splice(i, 1);
                    break;
                }
            }
        },
        emit: function(eventName, data) {
            data.type = eventName;
            if (this.topics[eventName]) this.topics[eventName].forEach(function(fn) {
                fn(data, eventName);
            });
        }
    };
}
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
    var tick = Math.min(duration, 10), unit = to.indexOf("%") >= 0 ? "%" : "px", to = to.replace(unit, ""), from = Number(element.style[attr].replace(prefix, "").replace(postfix, "").replace(unit, "")), positionTick = (to - from) / duration * tick;
    setTimeout(moveElement, tick);
    function moveElement() {
        duration -= tick;
        from += positionTick;
        element.style[attr] = prefix + from + unit + postfix;
        if (duration > 0) setTimeout(moveElement, tick);
        else callback();
    }
}
// Object.keys
if (!Object.keys) Object.keys = function(object) {
    var keys = [];
    for(var name in object)if (Object.prototype.hasOwnProperty.call(object, name)) keys.push(name);
    return keys;
};
 // ChildNode.remove
if (!("remove" in Element.prototype)) Element.prototype.remove = function() {
    if (this.parentNode) this.parentNode.removeChild(this);
};
var tns = function(options) {
    options = extend({
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: false,
        autoWidth: false,
        viewportMax: false,
        slideBy: 1,
        center: false,
        controls: true,
        controlsPosition: "top",
        controlsText: [
            "prev",
            "next"
        ],
        controlsContainer: false,
        prevButton: false,
        nextButton: false,
        nav: true,
        navPosition: "top",
        navContainer: false,
        navAsThumbnails: false,
        arrowKeys: false,
        speed: 300,
        autoplay: false,
        autoplayPosition: "top",
        autoplayTimeout: 5000,
        autoplayDirection: "forward",
        autoplayText: [
            "start",
            "stop"
        ],
        autoplayHoverPause: false,
        autoplayButton: false,
        autoplayButtonOutput: true,
        autoplayResetOnVisibility: true,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: false,
        loop: true,
        rewind: false,
        autoHeight: false,
        responsive: false,
        lazyload: false,
        lazyloadSelector: ".tns-lazy-img",
        touch: true,
        mouseDrag: false,
        swipeAngle: 15,
        nested: false,
        preventActionWhenRunning: false,
        preventScrollOnTouch: false,
        freezable: true,
        onInit: false,
        useLocalStorage: true,
        nonce: false
    }, options || {});
    var doc = document, win = window, KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
    }, tnsStorage = {}, localStorageAccess = options.useLocalStorage;
    if (localStorageAccess) {
        // check browser version and local storage access
        var browserInfo = navigator.userAgent;
        var uid = new Date();
        try {
            tnsStorage = win.localStorage;
            if (tnsStorage) {
                tnsStorage.setItem(uid, uid);
                localStorageAccess = tnsStorage.getItem(uid) == uid;
                tnsStorage.removeItem(uid);
            } else localStorageAccess = false;
            if (!localStorageAccess) tnsStorage = {};
        } catch (e) {
            localStorageAccess = false;
        }
        if (localStorageAccess) {
            // remove storage when browser version changes
            if (tnsStorage["tnsApp"] && tnsStorage["tnsApp"] !== browserInfo) [
                "tC",
                "tPL",
                "tMQ",
                "tTf",
                "t3D",
                "tTDu",
                "tTDe",
                "tADu",
                "tADe",
                "tTE",
                "tAE"
            ].forEach(function(item) {
                tnsStorage.removeItem(item);
            });
             // update browserInfo
            localStorage["tnsApp"] = browserInfo;
        }
    }
    var CALC = tnsStorage["tC"] ? checkStorageValue(tnsStorage["tC"]) : setLocalStorage(tnsStorage, "tC", calc(), localStorageAccess), PERCENTAGELAYOUT = tnsStorage["tPL"] ? checkStorageValue(tnsStorage["tPL"]) : setLocalStorage(tnsStorage, "tPL", percentageLayout(), localStorageAccess), CSSMQ = tnsStorage["tMQ"] ? checkStorageValue(tnsStorage["tMQ"]) : setLocalStorage(tnsStorage, "tMQ", mediaquerySupport(), localStorageAccess), TRANSFORM = tnsStorage["tTf"] ? checkStorageValue(tnsStorage["tTf"]) : setLocalStorage(tnsStorage, "tTf", whichProperty("transform"), localStorageAccess), HAS3DTRANSFORMS = tnsStorage["t3D"] ? checkStorageValue(tnsStorage["t3D"]) : setLocalStorage(tnsStorage, "t3D", has3DTransforms(TRANSFORM), localStorageAccess), TRANSITIONDURATION = tnsStorage["tTDu"] ? checkStorageValue(tnsStorage["tTDu"]) : setLocalStorage(tnsStorage, "tTDu", whichProperty("transitionDuration"), localStorageAccess), TRANSITIONDELAY = tnsStorage["tTDe"] ? checkStorageValue(tnsStorage["tTDe"]) : setLocalStorage(tnsStorage, "tTDe", whichProperty("transitionDelay"), localStorageAccess), ANIMATIONDURATION = tnsStorage["tADu"] ? checkStorageValue(tnsStorage["tADu"]) : setLocalStorage(tnsStorage, "tADu", whichProperty("animationDuration"), localStorageAccess), ANIMATIONDELAY = tnsStorage["tADe"] ? checkStorageValue(tnsStorage["tADe"]) : setLocalStorage(tnsStorage, "tADe", whichProperty("animationDelay"), localStorageAccess), TRANSITIONEND = tnsStorage["tTE"] ? checkStorageValue(tnsStorage["tTE"]) : setLocalStorage(tnsStorage, "tTE", getEndProperty(TRANSITIONDURATION, "Transition"), localStorageAccess), ANIMATIONEND = tnsStorage["tAE"] ? checkStorageValue(tnsStorage["tAE"]) : setLocalStorage(tnsStorage, "tAE", getEndProperty(ANIMATIONDURATION, "Animation"), localStorageAccess); // get element nodes from selectors
    var supportConsoleWarn = win.console && typeof win.console.warn === "function", tnsList = [
        "container",
        "controlsContainer",
        "prevButton",
        "nextButton",
        "navContainer",
        "autoplayButton"
    ], optionsElements = {};
    tnsList.forEach(function(item) {
        if (typeof options[item] === "string") {
            var str = options[item], el = doc.querySelector(str);
            optionsElements[item] = str;
            if (el && el.nodeName) options[item] = el;
            else {
                if (supportConsoleWarn) console.warn("Can't find", options[item]);
                return;
            }
        }
    }); // make sure at least 1 slide
    if (options.container.children.length < 1) {
        if (supportConsoleWarn) console.warn("No slides found in", options.container);
        return;
    } // update options
    var responsive = options.responsive, nested = options.nested, carousel = options.mode === "carousel" ? true : false;
    if (responsive) {
        // apply responsive[0] to options and remove it
        if (0 in responsive) {
            options = extend(options, responsive[0]);
            delete responsive[0];
        }
        var responsiveTem = {};
        for(var key in responsive){
            var val = responsive[key]; // update responsive
            // from: 300: 2
            // to:
            //   300: {
            //     items: 2
            //   }
            val = typeof val === "number" ? {
                items: val
            } : val;
            responsiveTem[key] = val;
        }
        responsive = responsiveTem;
        responsiveTem = null;
    } // update options
    function updateOptions(obj) {
        for(var key in obj){
            if (!carousel) {
                if (key === "slideBy") obj[key] = "page";
                if (key === "edgePadding") obj[key] = false;
                if (key === "autoHeight") obj[key] = false;
            } // update responsive options
            if (key === "responsive") updateOptions(obj[key]);
        }
    }
    if (!carousel) updateOptions(options);
     // === define and set variables ===
    if (!carousel) {
        options.axis = "horizontal";
        options.slideBy = "page";
        options.edgePadding = false;
        var animateIn = options.animateIn, animateOut = options.animateOut, animateDelay = options.animateDelay, animateNormal = options.animateNormal;
    }
    var horizontal = options.axis === "horizontal" ? true : false, outerWrapper = doc.createElement("div"), innerWrapper = doc.createElement("div"), middleWrapper, container = options.container, containerParent = container.parentNode, containerHTML = container.outerHTML, slideItems = container.children, slideCount = slideItems.length, breakpointZone, windowWidth = getWindowWidth(), isOn = false;
    if (responsive) setBreakpointZone();
    if (carousel) container.className += " tns-vpfix";
     // fixedWidth: viewport > rightBoundary > indexMax
    var autoWidth = options.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options.viewportMax || options.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed = getOption("speed"), rewind = options.rewind, loop = rewind ? false : options.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = createStyleSheet(null, getOption("nonce")), lazyload = options.lazyload, lazyloadSelector = options.lazyloadSelector, slidePositions, // collection of slide positions
    slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, // transform
    transformAttr = horizontal ? "left" : "top", transformPrefix = "", transformPostfix = "", // index
    getIndexMax = function() {
        if (fixedWidth) return function() {
            return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
        };
        else if (autoWidth) return function() {
            for(var i = 0; i < slideCountNew; i++){
                if (slidePositions[i] >= -rightBoundary) return i;
            }
        };
        else return function() {
            if (center && carousel && !loop) return slideCount - 1;
            else return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        };
    }(), index = getStartIndex(getOption("startIndex")), indexCached = index;
    getCurrentSlide();
    var indexMin = 0, indexMax = !autoWidth ? getIndexMax() : null, preventActionWhenRunning = options.preventActionWhenRunning, swipeAngle = options.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options.onInit, events = new Events(), // id, class
    newContainerClasses = " tns-slider tns-" + options.mode, slideId = container.id || getSlideId(), disable = getOption("disable"), disabled = false, freezable = options.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
        "click": onControlsClick,
        "keydown": onControlsKeydown
    }, navEvents = {
        "click": onNavClick,
        "keydown": onNavKeydown
    }, hoverEvents = {
        "mouseover": mouseoverPause,
        "mouseout": mouseoutRestart
    }, visibilityEvent = {
        "visibilitychange": onVisibilityChange
    }, docmentKeydownEvent = {
        "keydown": onDocumentKeydown
    }, touchEvents = {
        "touchstart": onPanStart,
        "touchmove": onPanMove,
        "touchend": onPanEnd,
        "touchcancel": onPanEnd
    }, dragEvents = {
        "mousedown": onPanStart,
        "mousemove": onPanMove,
        "mouseup": onPanEnd,
        "mouseleave": onPanEnd
    }, hasControls = hasOption("controls"), hasNav = hasOption("nav"), navAsThumbnails = autoWidth ? true : options.navAsThumbnails, hasAutoplay = hasOption("autoplay"), hasTouch = hasOption("touch"), hasMouseDrag = hasOption("mouseDrag"), slideActiveClass = "tns-slide-active", slideClonedClass = "tns-slide-cloned", imgCompleteClass = "tns-complete", imgEvents = {
        "load": onImgLoaded,
        "error": onImgFailed
    }, imgsComplete, liveregionCurrent, preventScroll = options.preventScrollOnTouch === "force" ? true : false; // controls
    if (hasControls) var controlsContainer = options.controlsContainer, controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : "", prevButton = options.prevButton, nextButton = options.nextButton, prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : "", nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : "", prevIsButton, nextIsButton;
     // nav
    if (hasNav) var navContainer = options.navContainer, navContainerHTML = options.navContainer ? options.navContainer.outerHTML : "", navItems, pages = autoWidth ? slideCount : getPages(), pagesCached = 0, navClicked = -1, navCurrentIndex = getCurrentNavIndex(), navCurrentIndexCached = navCurrentIndex, navActiveClass = "tns-nav-active", navStr = "Carousel Page ", navStrCurrent = " (Current Slide)";
     // autoplay
    if (hasAutoplay) var autoplayDirection = options.autoplayDirection === "forward" ? 1 : -1, autoplayButton = options.autoplayButton, autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : "", autoplayHtmlStrings = [
        "<span class='tns-visually-hidden'>",
        " animation</span>"
    ], autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused;
    if (hasTouch || hasMouseDrag) var initPosition = {}, lastPosition = {}, translateInit, panStart = false, rafIndex, getDist = horizontal ? function(a, b) {
        return a.x - b.x;
    } : function(a, b) {
        return a.y - b.y;
    };
     // disable slider when slidecount <= items
    if (!autoWidth) resetVariblesWhenDisable(disable || freeze);
    if (TRANSFORM) {
        transformAttr = TRANSFORM;
        transformPrefix = "translate";
        if (HAS3DTRANSFORMS) {
            transformPrefix += horizontal ? "3d(" : "3d(0px, ";
            transformPostfix = horizontal ? ", 0px, 0px)" : ", 0px)";
        } else {
            transformPrefix += horizontal ? "X(" : "Y(";
            transformPostfix = ")";
        }
    }
    if (carousel) container.className = container.className.replace("tns-vpfix", "");
    initStructure();
    initSheet();
    initSliderTransform(); // === COMMON FUNCTIONS === //
    function resetVariblesWhenDisable(condition) {
        if (condition) controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
    function getCurrentSlide() {
        var tem = carousel ? index - cloneCount : index;
        while(tem < 0)tem += slideCount;
        return tem % slideCount + 1;
    }
    function getStartIndex(ind) {
        ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
        return carousel ? ind + cloneCount : ind;
    }
    function getAbsIndex(i) {
        if (i == null) i = index;
        if (carousel) i -= cloneCount;
        while(i < 0)i += slideCount;
        return Math.floor(i % slideCount);
    }
    function getCurrentNavIndex() {
        var absIndex = getAbsIndex(), result;
        result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items); // set active nav to the last one when reaches the right edge
        if (!loop && carousel && index === indexMax) result = pages - 1;
        return result;
    }
    function getItemsMax() {
        // fixedWidth or autoWidth while viewportMax is not available
        if (autoWidth || fixedWidth && !viewportMax) return slideCount - 1; // most cases
        else {
            var str = fixedWidth ? "fixedWidth" : "items", arr = [];
            if (fixedWidth || options[str] < slideCount) arr.push(options[str]);
            if (responsive) for(var bp in responsive){
                var tem = responsive[bp][str];
                if (tem && (fixedWidth || tem < slideCount)) arr.push(tem);
            }
            if (!arr.length) arr.push(0);
            return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
        }
    }
    function getCloneCountForLoop() {
        var itemsMax = getItemsMax(), result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
        result = Math.max(itemsMax, result);
        return hasOption("edgePadding") ? result + 1 : result;
    }
    function getWindowWidth() {
        return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    }
    function getInsertPosition(pos) {
        return pos === "top" ? "afterbegin" : "beforeend";
    }
    function getClientWidth(el) {
        if (el == null) return;
        var div = doc.createElement("div"), rect, width;
        el.appendChild(div);
        rect = div.getBoundingClientRect();
        width = rect.right - rect.left;
        div.remove();
        return width || getClientWidth(el.parentNode);
    }
    function getViewportWidth() {
        var gap = edgePadding ? edgePadding * 2 - gutter : 0;
        return getClientWidth(containerParent) - gap;
    }
    function hasOption(item) {
        if (options[item]) return true;
        else {
            if (responsive) for(var bp in responsive){
                if (responsive[bp][item]) return true;
            }
            return false;
        }
    } // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    function getOption(item, ww) {
        if (ww == null) ww = windowWidth;
        if (item === "items" && fixedWidth) return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
        else {
            var result = options[item];
            if (responsive) for(var bp in responsive){
                // bp: convert string to number
                if (ww >= parseInt(bp)) {
                    if (item in responsive[bp]) result = responsive[bp][item];
                }
            }
            if (item === "slideBy" && result === "page") result = getOption("items");
            if (!carousel && (item === "slideBy" || item === "items")) result = Math.floor(result);
            return result;
        }
    }
    function getSlideMarginLeft(i) {
        return CALC ? CALC + "(" + i * 100 + "% / " + slideCountNew + ")" : i * 100 / slideCountNew + "%";
    }
    function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
        var str = "";
        if (edgePaddingTem !== undefined) {
            var gap = edgePaddingTem;
            if (gutterTem) gap -= gutterTem;
            str = horizontal ? "margin: 0 " + gap + "px 0 " + edgePaddingTem + "px;" : "margin: " + edgePaddingTem + "px 0 " + gap + "px 0;";
        } else if (gutterTem && !fixedWidthTem) {
            var gutterTemUnit = "-" + gutterTem + "px", dir = horizontal ? gutterTemUnit + " 0 0" : "0 " + gutterTemUnit + " 0";
            str = "margin: 0 " + dir + ";";
        }
        if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) str += getTransitionDurationStyle(speedTem);
        return str;
    }
    function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
        if (fixedWidthTem) return (fixedWidthTem + gutterTem) * slideCountNew + "px";
        else return CALC ? CALC + "(" + slideCountNew * 100 + "% / " + itemsTem + ")" : slideCountNew * 100 / itemsTem + "%";
    }
    function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
        var width;
        if (fixedWidthTem) width = fixedWidthTem + gutterTem + "px";
        else {
            if (!carousel) itemsTem = Math.floor(itemsTem);
            var dividend = carousel ? slideCountNew : itemsTem;
            width = CALC ? CALC + "(100% / " + dividend + ")" : 100 / dividend + "%";
        }
        width = "width:" + width; // inner slider: overwrite outer slider styles
        return nested !== "inner" ? width + ";" : width + " !important;";
    }
    function getSlideGutterStyle(gutterTem) {
        var str = ""; // gutter maybe interger || 0
        // so can't use 'if (gutter)'
        if (gutterTem !== false) {
            var prop = horizontal ? "padding-" : "margin-", dir = horizontal ? "right" : "bottom";
            str = prop + dir + ": " + gutterTem + "px;";
        }
        return str;
    }
    function getCSSPrefix(name, num) {
        var prefix = name.substring(0, name.length - num).toLowerCase();
        if (prefix) prefix = "-" + prefix + "-";
        return prefix;
    }
    function getTransitionDurationStyle(speed) {
        return getCSSPrefix(TRANSITIONDURATION, 18) + "transition-duration:" + speed / 1000 + "s;";
    }
    function getAnimationDurationStyle(speed) {
        return getCSSPrefix(ANIMATIONDURATION, 17) + "animation-duration:" + speed / 1000 + "s;";
    }
    function initStructure() {
        var classOuter = "tns-outer", classInner = "tns-inner";
        hasOption("gutter");
        outerWrapper.className = classOuter;
        innerWrapper.className = classInner;
        outerWrapper.id = slideId + "-ow";
        innerWrapper.id = slideId + "-iw"; // set container properties
        if (container.id === "") container.id = slideId;
        newContainerClasses += PERCENTAGELAYOUT || autoWidth ? " tns-subpixel" : " tns-no-subpixel";
        newContainerClasses += CALC ? " tns-calc" : " tns-no-calc";
        if (autoWidth) newContainerClasses += " tns-autowidth";
        newContainerClasses += " tns-" + options.axis;
        container.className += newContainerClasses; // add constrain layer for carousel
        if (carousel) {
            middleWrapper = doc.createElement("div");
            middleWrapper.id = slideId + "-mw";
            middleWrapper.className = "tns-ovh";
            outerWrapper.appendChild(middleWrapper);
            middleWrapper.appendChild(innerWrapper);
        } else outerWrapper.appendChild(innerWrapper);
        if (autoHeight) {
            var wp = middleWrapper ? middleWrapper : innerWrapper;
            wp.className += " tns-ah";
        }
        containerParent.insertBefore(outerWrapper, container);
        innerWrapper.appendChild(container); // add id, class, aria attributes
        // before clone slides
        forEach(slideItems, function(item, i) {
            addClass(item, "tns-item");
            if (!item.id) item.id = slideId + "-item" + i;
            if (!carousel && animateNormal) addClass(item, animateNormal);
            setAttrs(item, {
                "aria-hidden": "true",
                "tabindex": "-1"
            });
        }); // ## clone slides
        // carousel: n + slides + n
        // gallery:      slides + n
        if (cloneCount) {
            var fragmentBefore = doc.createDocumentFragment(), fragmentAfter = doc.createDocumentFragment();
            for(var j = cloneCount; j--;){
                var num = j % slideCount, cloneFirst = slideItems[num].cloneNode(true);
                addClass(cloneFirst, slideClonedClass);
                removeAttrs(cloneFirst, "id");
                fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
                if (carousel) {
                    var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
                    addClass(cloneLast, slideClonedClass);
                    removeAttrs(cloneLast, "id");
                    fragmentBefore.appendChild(cloneLast);
                }
            }
            container.insertBefore(fragmentBefore, container.firstChild);
            container.appendChild(fragmentAfter);
            slideItems = container.children;
        }
    }
    function initSliderTransform() {
        // ## images loaded/failed
        if (hasOption("autoHeight") || autoWidth || !horizontal) {
            var imgs = container.querySelectorAll("img"); // add img load event listener
            forEach(imgs, function(img) {
                var src = img.src;
                if (!lazyload) {
                    // not data img
                    if (src && src.indexOf("data:image") < 0) {
                        img.src = "";
                        addEvents(img, imgEvents);
                        addClass(img, "loading");
                        img.src = src; // data img
                    } else imgLoaded(img);
                }
            }); // set imgsComplete
            raf(function() {
                imgsLoadedCheck(arrayFromNodeList(imgs), function() {
                    imgsComplete = true;
                });
            }); // reset imgs for auto height: check visible imgs only
            if (hasOption("autoHeight")) imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
            lazyload ? initSliderTransformStyleCheck() : raf(function() {
                imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck);
            });
        } else {
            // set container transform property
            if (carousel) doContainerTransformSilent();
             // update slider tools and events
            initTools();
            initEvents();
        }
    }
    function initSliderTransformStyleCheck() {
        if (autoWidth && slideCount > 1) {
            // check styles application
            var num = loop ? index : slideCount - 1;
            (function stylesApplicationCheck() {
                var left = slideItems[num].getBoundingClientRect().left;
                var right = slideItems[num - 1].getBoundingClientRect().right;
                Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function() {
                    stylesApplicationCheck();
                }, 16);
            })();
        } else initSliderTransformCore();
    }
    function initSliderTransformCore() {
        // run Fn()s which are rely on image loading
        if (!horizontal || autoWidth) {
            setSlidePositions();
            if (autoWidth) {
                rightBoundary = getRightBoundary();
                if (freezable) freeze = getFreeze();
                indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
                resetVariblesWhenDisable(disable || freeze);
            } else updateContentWrapperHeight();
        } // set container transform property
        if (carousel) doContainerTransformSilent();
         // update slider tools and events
        initTools();
        initEvents();
    }
    function initSheet() {
        // gallery:
        // set animation classes and left value for gallery slider
        if (!carousel) for(var i = index, l = index + Math.min(slideCount, items); i < l; i++){
            var item = slideItems[i];
            item.style.left = (i - index) * 100 / items + "%";
            addClass(item, animateIn);
            removeClass(item, animateNormal);
        }
         // #### LAYOUT
        // ## INLINE-BLOCK VS FLOAT
        // ## PercentageLayout:
        // slides: inline-block
        // remove blank space between slides by set font-size: 0
        // ## Non PercentageLayout:
        // slides: float
        //         margin-right: -100%
        //         margin-left: ~
        // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
        if (horizontal) {
            if (PERCENTAGELAYOUT || autoWidth) {
                addCSSRule(sheet, "#" + slideId + " > .tns-item", "font-size:" + win.getComputedStyle(slideItems[0]).fontSize + ";", getCssRulesLength(sheet));
                addCSSRule(sheet, "#" + slideId, "font-size:0;", getCssRulesLength(sheet));
            } else if (carousel) forEach(slideItems, function(slide, i) {
                slide.style.marginLeft = getSlideMarginLeft(i);
            });
        } // ## BASIC STYLES
        if (CSSMQ) {
            // middle wrapper style
            if (TRANSITIONDURATION) {
                var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : "";
                addCSSRule(sheet, "#" + slideId + "-mw", str, getCssRulesLength(sheet));
            } // inner wrapper styles
            str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
            addCSSRule(sheet, "#" + slideId + "-iw", str, getCssRulesLength(sheet)); // container styles
            if (carousel) {
                str = horizontal && !autoWidth ? "width:" + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ";" : "";
                if (TRANSITIONDURATION) str += getTransitionDurationStyle(speed);
                addCSSRule(sheet, "#" + slideId, str, getCssRulesLength(sheet));
            } // slide styles
            str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : "";
            if (options.gutter) str += getSlideGutterStyle(options.gutter);
             // set gallery items transition-duration
            if (!carousel) {
                if (TRANSITIONDURATION) str += getTransitionDurationStyle(speed);
                if (ANIMATIONDURATION) str += getAnimationDurationStyle(speed);
            }
            if (str) addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
             // non CSS mediaqueries: IE8
        // ## update inner wrapper, container, slides if needed
        // set inline styles for inner wrapper & container
        // insert stylesheet (one line) for slides only (since slides are many)
        } else {
            // middle wrapper styles
            update_carousel_transition_duration(); // inner wrapper styles
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight); // container styles
            if (carousel && horizontal && !autoWidth) container.style.width = getContainerWidth(fixedWidth, gutter, items);
             // slide styles
            var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : "";
            if (gutter) str += getSlideGutterStyle(gutter);
             // append to the last line
            if (str) addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
        } // ## MEDIAQUERIES
        if (responsive && CSSMQ) for(var bp in responsive){
            // bp: convert string to number
            bp = parseInt(bp);
            var opts = responsive[bp], str = "", middleWrapperStr = "", innerWrapperStr = "", containerStr = "", slideStr = "", itemsBP = !autoWidth ? getOption("items", bp) : null, fixedWidthBP = getOption("fixedWidth", bp), speedBP = getOption("speed", bp), edgePaddingBP = getOption("edgePadding", bp), autoHeightBP = getOption("autoHeight", bp), gutterBP = getOption("gutter", bp); // middle wrapper string
            if (TRANSITIONDURATION && middleWrapper && getOption("autoHeight", bp) && "speed" in opts) middleWrapperStr = "#" + slideId + "-mw{" + getTransitionDurationStyle(speedBP) + "}";
             // inner wrapper string
            if ("edgePadding" in opts || "gutter" in opts) innerWrapperStr = "#" + slideId + "-iw{" + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + "}";
             // container string
            if (carousel && horizontal && !autoWidth && ("fixedWidth" in opts || "items" in opts || fixedWidth && "gutter" in opts)) containerStr = "width:" + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ";";
            if (TRANSITIONDURATION && "speed" in opts) containerStr += getTransitionDurationStyle(speedBP);
            if (containerStr) containerStr = "#" + slideId + "{" + containerStr + "}";
             // slide string
            if ("fixedWidth" in opts || fixedWidth && "gutter" in opts || !carousel && "items" in opts) slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
            if ("gutter" in opts) slideStr += getSlideGutterStyle(gutterBP);
             // set gallery items transition-duration
            if (!carousel && "speed" in opts) {
                if (TRANSITIONDURATION) slideStr += getTransitionDurationStyle(speedBP);
                if (ANIMATIONDURATION) slideStr += getAnimationDurationStyle(speedBP);
            }
            if (slideStr) slideStr = "#" + slideId + " > .tns-item{" + slideStr + "}";
             // add up
            str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
            if (str) sheet.insertRule("@media (min-width: " + bp / 16 + "em) {" + str + "}", sheet.cssRules.length);
        }
    }
    function initTools() {
        // == slides ==
        updateSlideStatus(); // == live region ==
        outerWrapper.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + "</span>  of " + slideCount + "</div>");
        liveregionCurrent = outerWrapper.querySelector(".tns-liveregion .current"); // == autoplayInit ==
        if (hasAutoplay) {
            var txt = autoplay ? "stop" : "start";
            if (autoplayButton) setAttrs(autoplayButton, {
                "data-action": txt
            });
            else if (options.autoplayButtonOutput) {
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
                autoplayButton = outerWrapper.querySelector("[data-action]");
            } // add event
            if (autoplayButton) addEvents(autoplayButton, {
                "click": toggleAutoplay
            });
            if (autoplay) {
                startAutoplay();
                if (autoplayHoverPause) addEvents(container, hoverEvents);
                if (autoplayResetOnVisibility) addEvents(container, visibilityEvent);
            }
        } // == navInit ==
        if (hasNav) {
            // will not hide the navs in case they're thumbnails
            if (navContainer) {
                setAttrs(navContainer, {
                    "aria-label": "Carousel Pagination"
                });
                navItems = navContainer.children;
                forEach(navItems, function(item, i) {
                    setAttrs(item, {
                        "data-nav": i,
                        "tabindex": "-1",
                        "aria-label": navStr + (i + 1),
                        "aria-controls": slideId
                    });
                }); // generated nav
            } else {
                var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
                for(var i = 0; i < slideCount; i++)// hide nav items by default
                navHtml += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
                navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + "</div>";
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
                navContainer = outerWrapper.querySelector(".tns-nav");
                navItems = navContainer.children;
            }
            updateNavVisibility(); // add transition
            if (TRANSITIONDURATION) {
                var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(), str = "transition: all " + speed / 1000 + "s";
                if (prefix) str = "-" + prefix + "-" + str;
                addCSSRule(sheet, "[aria-controls^=" + slideId + "-item]", str, getCssRulesLength(sheet));
            }
            setAttrs(navItems[navCurrentIndex], {
                "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
            });
            removeAttrs(navItems[navCurrentIndex], "tabindex");
            addClass(navItems[navCurrentIndex], navActiveClass); // add events
            addEvents(navContainer, navEvents);
        } // == controlsInit ==
        if (hasControls) {
            if (!controlsContainer && (!prevButton || !nextButton)) {
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + "</button></div>");
                controlsContainer = outerWrapper.querySelector(".tns-controls");
            }
            if (!prevButton || !nextButton) {
                prevButton = controlsContainer.children[0];
                nextButton = controlsContainer.children[1];
            }
            if (options.controlsContainer) setAttrs(controlsContainer, {
                "aria-label": "Carousel Navigation",
                "tabindex": "0"
            });
            if (options.controlsContainer || options.prevButton && options.nextButton) setAttrs([
                prevButton,
                nextButton
            ], {
                "aria-controls": slideId,
                "tabindex": "-1"
            });
            if (options.controlsContainer || options.prevButton && options.nextButton) {
                setAttrs(prevButton, {
                    "data-controls": "prev"
                });
                setAttrs(nextButton, {
                    "data-controls": "next"
                });
            }
            prevIsButton = isButton(prevButton);
            nextIsButton = isButton(nextButton);
            updateControlsStatus(); // add events
            if (controlsContainer) addEvents(controlsContainer, controlsEvents);
            else {
                addEvents(prevButton, controlsEvents);
                addEvents(nextButton, controlsEvents);
            }
        } // hide tools if needed
        disableUI();
    }
    function initEvents() {
        // add events
        if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            addEvents(container, eve);
        }
        if (touch) addEvents(container, touchEvents, options.preventScrollOnTouch);
        if (mouseDrag) addEvents(container, dragEvents);
        if (arrowKeys) addEvents(doc, docmentKeydownEvent);
        if (nested === "inner") events.on("outerResized", function() {
            resizeTasks();
            events.emit("innerLoaded", info());
        });
        else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) addEvents(win, {
            "resize": onResize
        });
        if (autoHeight) {
            if (nested === "outer") events.on("innerLoaded", doAutoHeight);
            else if (!disable) doAutoHeight();
        }
        doLazyLoad();
        if (disable) disableSlider();
        else if (freeze) freezeSlider();
        events.on("indexChanged", additionalUpdates);
        if (nested === "inner") events.emit("innerLoaded", info());
        if (typeof onInit === "function") onInit(info());
        isOn = true;
    }
    function destroy() {
        // sheet
        sheet.disabled = true;
        if (sheet.ownerNode) sheet.ownerNode.remove();
         // remove win event listeners
        removeEvents(win, {
            "resize": onResize
        }); // arrowKeys, controls, nav
        if (arrowKeys) removeEvents(doc, docmentKeydownEvent);
        if (controlsContainer) removeEvents(controlsContainer, controlsEvents);
        if (navContainer) removeEvents(navContainer, navEvents);
         // autoplay
        removeEvents(container, hoverEvents);
        removeEvents(container, visibilityEvent);
        if (autoplayButton) removeEvents(autoplayButton, {
            "click": toggleAutoplay
        });
        if (autoplay) clearInterval(autoplayTimer);
         // container
        if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            removeEvents(container, eve);
        }
        if (touch) removeEvents(container, touchEvents);
        if (mouseDrag) removeEvents(container, dragEvents);
         // cache Object values in options && reset HTML
        var htmlList = [
            containerHTML,
            controlsContainerHTML,
            prevButtonHTML,
            nextButtonHTML,
            navContainerHTML,
            autoplayButtonHTML
        ];
        tnsList.forEach(function(item, i) {
            var el = item === "container" ? outerWrapper : options[item];
            if (typeof el === "object" && el) {
                var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
                el.outerHTML = htmlList[i];
                options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
            }
        }); // reset variables
        tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = panStart = rafIndex = getDist = touch = mouseDrag = null; // check variables
        // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });
        for(var a in this)if (a !== "rebuild") this[a] = null;
        isOn = false;
    } // === ON RESIZE ===
    // responsive || fixedWidth || autoWidth || !horizontal
    function onResize(e) {
        raf(function() {
            resizeTasks(getEvent(e));
        });
    }
    function resizeTasks(e) {
        if (!isOn) return;
        if (nested === "outer") events.emit("outerResized", info(e));
        windowWidth = getWindowWidth();
        var bpChanged, breakpointZoneTem = breakpointZone, needContainerTransform = false;
        if (responsive) {
            setBreakpointZone();
            bpChanged = breakpointZoneTem !== breakpointZone; // if (hasRightDeadZone) { needContainerTransform = true; } // *?
            if (bpChanged) events.emit("newBreakpointStart", info(e));
        }
        var indChanged, itemsChanged, itemsTem = items, disableTem = disable, freezeTem = freeze, arrowKeysTem = arrowKeys, controlsTem = controls, navTem = nav, touchTem = touch, mouseDragTem = mouseDrag, autoplayTem = autoplay, autoplayHoverPauseTem = autoplayHoverPause, autoplayResetOnVisibilityTem = autoplayResetOnVisibility, indexTem = index;
        if (bpChanged) {
            var fixedWidthTem = fixedWidth, autoHeightTem = autoHeight, controlsTextTem = controlsText, centerTem = center, autoplayTextTem = autoplayText;
            if (!CSSMQ) var gutterTem = gutter, edgePaddingTem = edgePadding;
        } // get option:
        // fixed width: viewport, fixedWidth, gutter => items
        // others: window width => all variables
        // all: items => slideBy
        arrowKeys = getOption("arrowKeys");
        controls = getOption("controls");
        nav = getOption("nav");
        touch = getOption("touch");
        center = getOption("center");
        mouseDrag = getOption("mouseDrag");
        autoplay = getOption("autoplay");
        autoplayHoverPause = getOption("autoplayHoverPause");
        autoplayResetOnVisibility = getOption("autoplayResetOnVisibility");
        if (bpChanged) {
            disable = getOption("disable");
            fixedWidth = getOption("fixedWidth");
            speed = getOption("speed");
            autoHeight = getOption("autoHeight");
            controlsText = getOption("controlsText");
            autoplayText = getOption("autoplayText");
            autoplayTimeout = getOption("autoplayTimeout");
            if (!CSSMQ) {
                edgePadding = getOption("edgePadding");
                gutter = getOption("gutter");
            }
        } // update options
        resetVariblesWhenDisable(disable);
        viewport = getViewportWidth(); // <= edgePadding, gutter
        if ((!horizontal || autoWidth) && !disable) {
            setSlidePositions();
            if (!horizontal) {
                updateContentWrapperHeight(); // <= setSlidePositions
                needContainerTransform = true;
            }
        }
        if (fixedWidth || autoWidth) {
            rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
            // fixedWidth: <= viewport, fixedWidth, gutter
            indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
        // fixedWidth: <= rightBoundary, fixedWidth, gutter
        }
        if (bpChanged || fixedWidth) {
            items = getOption("items");
            slideBy = getOption("slideBy");
            itemsChanged = items !== itemsTem;
            if (itemsChanged) {
                if (!fixedWidth && !autoWidth) indexMax = getIndexMax();
                 // <= items
                // check index before transform in case
                // slider reach the right edge then items become bigger
                updateIndex();
            }
        }
        if (bpChanged) {
            if (disable !== disableTem) {
                if (disable) disableSlider();
                else enableSlider(); // <= slidePositions, rightBoundary, indexMax
            }
        }
        if (freezable && (bpChanged || fixedWidth || autoWidth)) {
            freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
            // <= fixedWidth: fixedWidth, gutter, rightBoundary
            // <= others: items
            if (freeze !== freezeTem) {
                if (freeze) {
                    doContainerTransform(getContainerTransformValue(getStartIndex(0)));
                    freezeSlider();
                } else {
                    unfreezeSlider();
                    needContainerTransform = true;
                }
            }
        }
        resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
        if (!autoplay) autoplayHoverPause = autoplayResetOnVisibility = false;
        if (arrowKeys !== arrowKeysTem) arrowKeys ? addEvents(doc, docmentKeydownEvent) : removeEvents(doc, docmentKeydownEvent);
        if (controls !== controlsTem) {
            if (controls) {
                if (controlsContainer) showElement(controlsContainer);
                else {
                    if (prevButton) showElement(prevButton);
                    if (nextButton) showElement(nextButton);
                }
            } else if (controlsContainer) hideElement(controlsContainer);
            else {
                if (prevButton) hideElement(prevButton);
                if (nextButton) hideElement(nextButton);
            }
        }
        if (nav !== navTem) {
            if (nav) {
                showElement(navContainer);
                updateNavVisibility();
            } else hideElement(navContainer);
        }
        if (touch !== touchTem) touch ? addEvents(container, touchEvents, options.preventScrollOnTouch) : removeEvents(container, touchEvents);
        if (mouseDrag !== mouseDragTem) mouseDrag ? addEvents(container, dragEvents) : removeEvents(container, dragEvents);
        if (autoplay !== autoplayTem) {
            if (autoplay) {
                if (autoplayButton) showElement(autoplayButton);
                if (!animating && !autoplayUserPaused) startAutoplay();
            } else {
                if (autoplayButton) hideElement(autoplayButton);
                if (animating) stopAutoplay();
            }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) autoplayHoverPause ? addEvents(container, hoverEvents) : removeEvents(container, hoverEvents);
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) autoplayResetOnVisibility ? addEvents(doc, visibilityEvent) : removeEvents(doc, visibilityEvent);
        if (bpChanged) {
            if (fixedWidth !== fixedWidthTem || center !== centerTem) needContainerTransform = true;
            if (autoHeight !== autoHeightTem) {
                if (!autoHeight) innerWrapper.style.height = "";
            }
            if (controls && controlsText !== controlsTextTem) {
                prevButton.innerHTML = controlsText[0];
                nextButton.innerHTML = controlsText[1];
            }
            if (autoplayButton && autoplayText !== autoplayTextTem) {
                var i = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i].length;
                if (html.substring(len) === autoplayTextTem[i]) autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
            }
        } else if (center && (fixedWidth || autoWidth)) needContainerTransform = true;
        if (itemsChanged || fixedWidth && !autoWidth) {
            pages = getPages();
            updateNavVisibility();
        }
        indChanged = index !== indexTem;
        if (indChanged) {
            events.emit("indexChanged", info());
            needContainerTransform = true;
        } else if (itemsChanged) {
            if (!indChanged) additionalUpdates();
        } else if (fixedWidth || autoWidth) {
            doLazyLoad();
            updateSlideStatus();
            updateLiveRegion();
        }
        if (itemsChanged && !carousel) updateGallerySlidePositions();
        if (!disable && !freeze) {
            // non-mediaqueries: IE8
            if (bpChanged && !CSSMQ) {
                // middle wrapper styles
                // inner wrapper styles
                if (edgePadding !== edgePaddingTem || gutter !== gutterTem) innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
                if (horizontal) {
                    // container styles
                    if (carousel) container.style.width = getContainerWidth(fixedWidth, gutter, items);
                     // slide styles
                    var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter); // remove the last line and
                    // add new styles
                    removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
                    addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
                }
            } // auto height
            if (autoHeight) doAutoHeight();
            if (needContainerTransform) {
                doContainerTransformSilent();
                indexCached = index;
            }
        }
        if (bpChanged) events.emit("newBreakpointEnd", info(e));
    } // === INITIALIZATION FUNCTIONS === //
    function getFreeze() {
        if (!fixedWidth && !autoWidth) {
            var a = center ? items - (items - 1) / 2 : items;
            return slideCount <= a;
        }
        var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount], vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
        if (center) vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
        return width <= vp;
    }
    function setBreakpointZone() {
        breakpointZone = 0;
        for(var bp in responsive){
            bp = parseInt(bp); // convert string to number
            if (windowWidth >= bp) breakpointZone = bp;
        }
    } // (slideBy, indexMin, indexMax) => index
    var updateIndex = function() {
        return loop ? carousel ? function() {
            var leftEdge = indexMin, rightEdge = indexMax;
            leftEdge += slideBy;
            rightEdge -= slideBy; // adjust edges when has edge paddings
            // or fixed-width slider with extra space on the right side
            if (edgePadding) {
                leftEdge += 1;
                rightEdge -= 1;
            } else if (fixedWidth) {
                if ((viewport + gutter) % (fixedWidth + gutter)) rightEdge -= 1;
            }
            if (cloneCount) {
                if (index > rightEdge) index -= slideCount;
                else if (index < leftEdge) index += slideCount;
            }
        } : function() {
            if (index > indexMax) while(index >= indexMin + slideCount)index -= slideCount;
            else if (index < indexMin) while(index <= indexMax - slideCount)index += slideCount;
        } : function() {
            index = Math.max(indexMin, Math.min(indexMax, index));
        };
    }();
    function disableUI() {
        if (!autoplay && autoplayButton) hideElement(autoplayButton);
        if (!nav && navContainer) hideElement(navContainer);
        if (!controls) {
            if (controlsContainer) hideElement(controlsContainer);
            else {
                if (prevButton) hideElement(prevButton);
                if (nextButton) hideElement(nextButton);
            }
        }
    }
    function enableUI() {
        if (autoplay && autoplayButton) showElement(autoplayButton);
        if (nav && navContainer) showElement(navContainer);
        if (controls) {
            if (controlsContainer) showElement(controlsContainer);
            else {
                if (prevButton) showElement(prevButton);
                if (nextButton) showElement(nextButton);
            }
        }
    }
    function freezeSlider() {
        if (frozen) return;
         // remove edge padding from inner wrapper
        if (edgePadding) innerWrapper.style.margin = "0px";
         // add class tns-transparent to cloned slides
        if (cloneCount) {
            var str = "tns-transparent";
            for(var i = cloneCount; i--;){
                if (carousel) addClass(slideItems[i], str);
                addClass(slideItems[slideCountNew - i - 1], str);
            }
        } // update tools
        disableUI();
        frozen = true;
    }
    function unfreezeSlider() {
        if (!frozen) return;
         // restore edge padding for inner wrapper
        // for mordern browsers
        if (edgePadding && CSSMQ) innerWrapper.style.margin = "";
         // remove class tns-transparent to cloned slides
        if (cloneCount) {
            var str = "tns-transparent";
            for(var i = cloneCount; i--;){
                if (carousel) removeClass(slideItems[i], str);
                removeClass(slideItems[slideCountNew - i - 1], str);
            }
        } // update tools
        enableUI();
        frozen = false;
    }
    function disableSlider() {
        if (disabled) return;
        sheet.disabled = true;
        container.className = container.className.replace(newContainerClasses.substring(1), "");
        removeAttrs(container, [
            "style"
        ]);
        if (loop) for(var j = cloneCount; j--;){
            if (carousel) hideElement(slideItems[j]);
            hideElement(slideItems[slideCountNew - j - 1]);
        }
         // vertical slider
        if (!horizontal || !carousel) removeAttrs(innerWrapper, [
            "style"
        ]);
         // gallery
        if (!carousel) for(var i = index, l = index + slideCount; i < l; i++){
            var item = slideItems[i];
            removeAttrs(item, [
                "style"
            ]);
            removeClass(item, animateIn);
            removeClass(item, animateNormal);
        }
         // update tools
        disableUI();
        disabled = true;
    }
    function enableSlider() {
        if (!disabled) return;
        sheet.disabled = false;
        container.className += newContainerClasses;
        doContainerTransformSilent();
        if (loop) for(var j = cloneCount; j--;){
            if (carousel) showElement(slideItems[j]);
            showElement(slideItems[slideCountNew - j - 1]);
        }
         // gallery
        if (!carousel) for(var i = index, l = index + slideCount; i < l; i++){
            var item = slideItems[i], classN = i < index + items ? animateIn : animateNormal;
            item.style.left = (i - index) * 100 / items + "%";
            addClass(item, classN);
        }
         // update tools
        enableUI();
        disabled = false;
    }
    function updateLiveRegion() {
        var str = getLiveRegionStr();
        if (liveregionCurrent.innerHTML !== str) liveregionCurrent.innerHTML = str;
    }
    function getLiveRegionStr() {
        var arr = getVisibleSlideRange(), start = arr[0] + 1, end = arr[1] + 1;
        return start === end ? start + "" : start + " to " + end;
    }
    function getVisibleSlideRange(val) {
        if (val == null) val = getContainerTransformValue();
        var start = index, end, rangestart, rangeend; // get range start, range end for autoWidth and fixedWidth
        if (center || edgePadding) {
            if (autoWidth || fixedWidth) {
                rangestart = -(parseFloat(val) + edgePadding);
                rangeend = rangestart + viewport + edgePadding * 2;
            }
        } else if (autoWidth) {
            rangestart = slidePositions[index];
            rangeend = rangestart + viewport;
        }
         // get start, end
        // - check auto width
        if (autoWidth) slidePositions.forEach(function(point, i) {
            if (i < slideCountNew) {
                if ((center || edgePadding) && point <= rangestart + 0.5) start = i;
                if (rangeend - point >= 0.5) end = i;
            }
        }); // - check percentage width, fixed width
        else {
            if (fixedWidth) {
                var cell = fixedWidth + gutter;
                if (center || edgePadding) {
                    start = Math.floor(rangestart / cell);
                    end = Math.ceil(rangeend / cell - 1);
                } else end = start + Math.ceil(viewport / cell) - 1;
            } else if (center || edgePadding) {
                var a = items - 1;
                if (center) {
                    start -= a / 2;
                    end = index + a / 2;
                } else end = index + a;
                if (edgePadding) {
                    var b = edgePadding * items / viewport;
                    start -= b;
                    end += b;
                }
                start = Math.floor(start);
                end = Math.ceil(end);
            } else end = start + items - 1;
            start = Math.max(start, 0);
            end = Math.min(end, slideCountNew - 1);
        }
        return [
            start,
            end
        ];
    }
    function doLazyLoad() {
        if (lazyload && !disable) {
            var arg = getVisibleSlideRange();
            arg.push(lazyloadSelector);
            getImageArray.apply(null, arg).forEach(function(img) {
                if (!hasClass(img, imgCompleteClass)) {
                    // stop propagation transitionend event to container
                    var eve = {};
                    eve[TRANSITIONEND] = function(e) {
                        e.stopPropagation();
                    };
                    addEvents(img, eve);
                    addEvents(img, imgEvents); // update src
                    img.src = getAttr(img, "data-src"); // update srcset
                    var srcset = getAttr(img, "data-srcset");
                    if (srcset) img.srcset = srcset;
                    addClass(img, "loading");
                }
            });
        }
    }
    function onImgLoaded(e) {
        imgLoaded(getTarget(e));
    }
    function onImgFailed(e) {
        imgFailed(getTarget(e));
    }
    function imgLoaded(img) {
        addClass(img, "loaded");
        imgCompleted(img);
    }
    function imgFailed(img) {
        addClass(img, "failed");
        imgCompleted(img);
    }
    function imgCompleted(img) {
        addClass(img, imgCompleteClass);
        removeClass(img, "loading");
        removeEvents(img, imgEvents);
    }
    function getImageArray(start, end, imgSelector) {
        var imgs = [];
        if (!imgSelector) imgSelector = "img";
        while(start <= end){
            forEach(slideItems[start].querySelectorAll(imgSelector), function(img) {
                imgs.push(img);
            });
            start++;
        }
        return imgs;
    } // check if all visible images are loaded
    // and update container height if it's done
    function doAutoHeight() {
        var imgs = getImageArray.apply(null, getVisibleSlideRange());
        raf(function() {
            imgsLoadedCheck(imgs, updateInnerWrapperHeight);
        });
    }
    function imgsLoadedCheck(imgs, cb) {
        // execute callback function if all images are complete
        if (imgsComplete) return cb();
         // check image classes
        imgs.forEach(function(img, index) {
            if (!lazyload && img.complete) imgCompleted(img);
             // Check image.complete
            if (hasClass(img, imgCompleteClass)) imgs.splice(index, 1);
        }); // execute callback function if selected images are all complete
        if (!imgs.length) return cb();
         // otherwise execute this functiona again
        raf(function() {
            imgsLoadedCheck(imgs, cb);
        });
    }
    function additionalUpdates() {
        doLazyLoad();
        updateSlideStatus();
        updateLiveRegion();
        updateControlsStatus();
        updateNavStatus();
    }
    function update_carousel_transition_duration() {
        if (carousel && autoHeight) middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + "s";
    }
    function getMaxSlideHeight(slideStart, slideRange) {
        var heights = [];
        for(var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++)heights.push(slideItems[i].offsetHeight);
        return Math.max.apply(null, heights);
    } // update inner wrapper height
    // 1. get the max-height of the visible slides
    // 2. set transitionDuration to speed
    // 3. update inner wrapper height to max-height
    // 4. set transitionDuration to 0s after transition done
    function updateInnerWrapperHeight() {
        var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount), wp = middleWrapper ? middleWrapper : innerWrapper;
        if (wp.style.height !== maxHeight) wp.style.height = maxHeight + "px";
    } // get the distance from the top edge of the first slide to each slide
    // (init) => slidePositions
    function setSlidePositions() {
        slidePositions = [
            0
        ];
        var attr = horizontal ? "left" : "top", attr2 = horizontal ? "right" : "bottom", base = slideItems[0].getBoundingClientRect()[attr];
        forEach(slideItems, function(item, i) {
            // skip the first slide
            if (i) slidePositions.push(item.getBoundingClientRect()[attr] - base);
             // add the end edge
            if (i === slideCountNew - 1) slidePositions.push(item.getBoundingClientRect()[attr2] - base);
        });
    } // update slide
    function updateSlideStatus() {
        var range = getVisibleSlideRange(), start = range[0], end = range[1];
        forEach(slideItems, function(item, i) {
            // show slides
            if (i >= start && i <= end) {
                if (hasAttr(item, "aria-hidden")) {
                    removeAttrs(item, [
                        "aria-hidden",
                        "tabindex"
                    ]);
                    addClass(item, slideActiveClass);
                } // hide slides
            } else if (!hasAttr(item, "aria-hidden")) {
                setAttrs(item, {
                    "aria-hidden": "true",
                    "tabindex": "-1"
                });
                removeClass(item, slideActiveClass);
            }
        });
    } // gallery: update slide position
    function updateGallerySlidePositions() {
        var l = index + Math.min(slideCount, items);
        for(var i = slideCountNew; i--;){
            var item = slideItems[i];
            if (i >= index && i < l) {
                // add transitions to visible slides when adjusting their positions
                addClass(item, "tns-moving");
                item.style.left = (i - index) * 100 / items + "%";
                addClass(item, animateIn);
                removeClass(item, animateNormal);
            } else if (item.style.left) {
                item.style.left = "";
                addClass(item, animateNormal);
                removeClass(item, animateIn);
            } // remove outlet animation
            removeClass(item, animateOut);
        } // removing '.tns-moving'
        setTimeout(function() {
            forEach(slideItems, function(el) {
                removeClass(el, "tns-moving");
            });
        }, 300);
    } // set tabindex on Nav
    function updateNavStatus() {
        // get current nav
        if (nav) {
            navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
            navClicked = -1;
            if (navCurrentIndex !== navCurrentIndexCached) {
                var navPrev = navItems[navCurrentIndexCached], navCurrent = navItems[navCurrentIndex];
                setAttrs(navPrev, {
                    "tabindex": "-1",
                    "aria-label": navStr + (navCurrentIndexCached + 1)
                });
                removeClass(navPrev, navActiveClass);
                setAttrs(navCurrent, {
                    "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
                });
                removeAttrs(navCurrent, "tabindex");
                addClass(navCurrent, navActiveClass);
                navCurrentIndexCached = navCurrentIndex;
            }
        }
    }
    function getLowerCaseNodeName(el) {
        return el.nodeName.toLowerCase();
    }
    function isButton(el) {
        return getLowerCaseNodeName(el) === "button";
    }
    function isAriaDisabled(el) {
        return el.getAttribute("aria-disabled") === "true";
    }
    function disEnableElement(isButton, el, val) {
        if (isButton) el.disabled = val;
        else el.setAttribute("aria-disabled", val.toString());
    } // set 'disabled' to true on controls when reach the edges
    function updateControlsStatus() {
        if (!controls || rewind || loop) return;
        var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton), nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton), disablePrev = index <= indexMin ? true : false, disableNext = !rewind && index >= indexMax ? true : false;
        if (disablePrev && !prevDisabled) disEnableElement(prevIsButton, prevButton, true);
        if (!disablePrev && prevDisabled) disEnableElement(prevIsButton, prevButton, false);
        if (disableNext && !nextDisabled) disEnableElement(nextIsButton, nextButton, true);
        if (!disableNext && nextDisabled) disEnableElement(nextIsButton, nextButton, false);
    } // set duration
    function resetDuration(el, str) {
        if (TRANSITIONDURATION) el.style[TRANSITIONDURATION] = str;
    }
    function getSliderWidth() {
        return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
    }
    function getCenterGap(num) {
        if (num == null) num = index;
        var gap = edgePadding ? gutter : 0;
        return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
    }
    function getRightBoundary() {
        var gap = edgePadding ? gutter : 0, result = viewport + gap - getSliderWidth();
        if (center && !loop) result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
        if (result > 0) result = 0;
        return result;
    }
    function getContainerTransformValue(num) {
        if (num == null) num = index;
        var val;
        if (horizontal && !autoWidth) {
            if (fixedWidth) {
                val = -(fixedWidth + gutter) * num;
                if (center) val += getCenterGap();
            } else {
                var denominator = TRANSFORM ? slideCountNew : items;
                if (center) num -= getCenterGap();
                val = -num * 100 / denominator;
            }
        } else {
            val = -slidePositions[num];
            if (center && autoWidth) val += getCenterGap();
        }
        if (hasRightDeadZone) val = Math.max(val, rightBoundary);
        val += horizontal && !autoWidth && !fixedWidth ? "%" : "px";
        return val;
    }
    function doContainerTransformSilent(val) {
        resetDuration(container, "0s");
        doContainerTransform(val);
    }
    function doContainerTransform(val) {
        if (val == null) val = getContainerTransformValue();
        container.style[transformAttr] = transformPrefix + val + transformPostfix;
    }
    function animateSlide(number, classOut, classIn, isOut) {
        var l = number + items;
        if (!loop) l = Math.min(l, slideCountNew);
        for(var i = number; i < l; i++){
            var item = slideItems[i]; // set item positions
            if (!isOut) item.style.left = (i - index) * 100 / items + "%";
            if (animateDelay && TRANSITIONDELAY) item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + "s";
            removeClass(item, classOut);
            addClass(item, classIn);
            if (isOut) slideItemsOut.push(item);
        }
    } // make transfer after click/drag:
    // 1. change 'transform' property for mordern browsers
    // 2. change 'left' property for legacy browsers
    var transformCore = function() {
        return carousel ? function() {
            resetDuration(container, "");
            if (TRANSITIONDURATION || !speed) {
                // for morden browsers with non-zero duration or
                // zero duration for all browsers
                doContainerTransform(); // run fallback function manually
                // when duration is 0 / container is hidden
                if (!speed || !isVisible(container)) onTransitionEnd();
            } else // for old browser with non-zero duration
            jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
            if (!horizontal) updateContentWrapperHeight();
        } : function() {
            slideItemsOut = [];
            var eve = {};
            eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
            removeEvents(slideItems[indexCached], eve);
            addEvents(slideItems[index], eve);
            animateSlide(indexCached, animateIn, animateOut, true);
            animateSlide(index, animateNormal, animateIn); // run fallback function manually
            // when transition or animation not supported / duration is 0
            if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) onTransitionEnd();
        };
    }();
    function render(e, sliderMoved) {
        if (updateIndexBeforeTransform) updateIndex();
         // render when slider was moved (touch or drag) even though index may not change
        if (index !== indexCached || sliderMoved) {
            // events
            events.emit("indexChanged", info());
            events.emit("transitionStart", info());
            if (autoHeight) doAutoHeight();
             // pause autoplay when click or keydown from user
            if (animating && e && [
                "click",
                "keydown"
            ].indexOf(e.type) >= 0) stopAutoplay();
            running = true;
            transformCore();
        }
    }
    /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */ function strTrans(str) {
        return str.toLowerCase().replace(/-/g, "");
    } // AFTER TRANSFORM
    // Things need to be done after a transfer:
    // 1. check index
    // 2. add classes to visible slide
    // 3. disable controls buttons when reach the first/last slide in non-loop slider
    // 4. update nav status
    // 5. lazyload images
    // 6. update container height
    function onTransitionEnd(event) {
        // check running on gallery mode
        // make sure trantionend/animationend events run only once
        if (carousel || running) {
            events.emit("transitionEnd", info(event));
            if (!carousel && slideItemsOut.length > 0) for(var i = 0; i < slideItemsOut.length; i++){
                var item = slideItemsOut[i]; // set item positions
                item.style.left = "";
                if (ANIMATIONDELAY && TRANSITIONDELAY) {
                    item.style[ANIMATIONDELAY] = "";
                    item.style[TRANSITIONDELAY] = "";
                }
                removeClass(item, animateOut);
                addClass(item, animateNormal);
            }
            /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */ if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
                if (!updateIndexBeforeTransform) {
                    var indexTem = index;
                    updateIndex();
                    if (index !== indexTem) {
                        events.emit("indexChanged", info());
                        doContainerTransformSilent();
                    }
                }
                if (nested === "inner") events.emit("innerLoaded", info());
                running = false;
                indexCached = index;
            }
        }
    } // # ACTIONS
    function goTo(targetIndex, e) {
        if (freeze) return;
         // prev slideBy
        if (targetIndex === "prev") onControlsClick(e, -1); // next slideBy
        else if (targetIndex === "next") onControlsClick(e, 1); // go to exact slide
        else {
            if (running) {
                if (preventActionWhenRunning) return;
                else onTransitionEnd();
            }
            var absIndex = getAbsIndex(), indexGap = 0;
            if (targetIndex === "first") indexGap = -absIndex;
            else if (targetIndex === "last") indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
            else {
                if (typeof targetIndex !== "number") targetIndex = parseInt(targetIndex);
                if (!isNaN(targetIndex)) {
                    // from directly called goTo function
                    if (!e) targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
                    indexGap = targetIndex - absIndex;
                }
            } // gallery: make sure new page won't overlap with current page
            if (!carousel && indexGap && Math.abs(indexGap) < items) {
                var factor = indexGap > 0 ? 1 : -1;
                indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
            }
            index += indexGap; // make sure index is in range
            if (carousel && loop) {
                if (index < indexMin) index += slideCount;
                if (index > indexMax) index -= slideCount;
            } // if index is changed, start rendering
            if (getAbsIndex(index) !== getAbsIndex(indexCached)) render(e);
        }
    } // on controls click
    function onControlsClick(e, dir) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        var passEventObject;
        if (!dir) {
            e = getEvent(e);
            var target = getTarget(e);
            while(target !== controlsContainer && [
                prevButton,
                nextButton
            ].indexOf(target) < 0)target = target.parentNode;
            var targetIn = [
                prevButton,
                nextButton
            ].indexOf(target);
            if (targetIn >= 0) {
                passEventObject = true;
                dir = targetIn === 0 ? -1 : 1;
            }
        }
        if (rewind) {
            if (index === indexMin && dir === -1) {
                goTo("last", e);
                return;
            } else if (index === indexMax && dir === 1) {
                goTo("first", e);
                return;
            }
        }
        if (dir) {
            index += slideBy * dir;
            if (autoWidth) index = Math.floor(index);
             // pass e when click control buttons or keydown
            render(passEventObject || e && e.type === "keydown" ? e : null);
        }
    } // on nav click
    function onNavClick(e) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        e = getEvent(e);
        var target = getTarget(e), navIndex; // find the clicked nav item
        while(target !== navContainer && !hasAttr(target, "data-nav"))target = target.parentNode;
        if (hasAttr(target, "data-nav")) {
            var navIndex = navClicked = Number(getAttr(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
            goTo(targetIndex, e);
            if (navCurrentIndex === navIndex) {
                if (animating) stopAutoplay();
                navClicked = -1; // reset navClicked
            }
        }
    } // autoplay functions
    function setAutoplayTimer() {
        autoplayTimer = setInterval(function() {
            onControlsClick(null, autoplayDirection);
        }, autoplayTimeout);
        animating = true;
    }
    function stopAutoplayTimer() {
        clearInterval(autoplayTimer);
        animating = false;
    }
    function updateAutoplayButton(action, txt) {
        setAttrs(autoplayButton, {
            "data-action": action
        });
        autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
    }
    function startAutoplay() {
        setAutoplayTimer();
        if (autoplayButton) updateAutoplayButton("stop", autoplayText[1]);
    }
    function stopAutoplay() {
        stopAutoplayTimer();
        if (autoplayButton) updateAutoplayButton("start", autoplayText[0]);
    } // programaitcally play/pause the slider
    function play() {
        if (autoplay && !animating) {
            startAutoplay();
            autoplayUserPaused = false;
        }
    }
    function pause() {
        if (animating) {
            stopAutoplay();
            autoplayUserPaused = true;
        }
    }
    function toggleAutoplay() {
        if (animating) {
            stopAutoplay();
            autoplayUserPaused = true;
        } else {
            startAutoplay();
            autoplayUserPaused = false;
        }
    }
    function onVisibilityChange() {
        if (doc.hidden) {
            if (animating) {
                stopAutoplayTimer();
                autoplayVisibilityPaused = true;
            }
        } else if (autoplayVisibilityPaused) {
            setAutoplayTimer();
            autoplayVisibilityPaused = false;
        }
    }
    function mouseoverPause() {
        if (animating) {
            stopAutoplayTimer();
            autoplayHoverPaused = true;
        }
    }
    function mouseoutRestart() {
        if (autoplayHoverPaused) {
            setAutoplayTimer();
            autoplayHoverPaused = false;
        }
    } // keydown events on document
    function onDocumentKeydown(e) {
        e = getEvent(e);
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT
        ].indexOf(e.keyCode);
        if (keyIndex >= 0) onControlsClick(e, keyIndex === 0 ? -1 : 1);
    } // on key control
    function onControlsKeydown(e) {
        e = getEvent(e);
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT
        ].indexOf(e.keyCode);
        if (keyIndex >= 0) {
            if (keyIndex === 0) {
                if (!prevButton.disabled) onControlsClick(e, -1);
            } else if (!nextButton.disabled) onControlsClick(e, 1);
        }
    } // set focus
    function setFocus(el) {
        el.focus();
    } // on key nav
    function onNavKeydown(e) {
        e = getEvent(e);
        var curElement = doc.activeElement;
        if (!hasAttr(curElement, "data-nav")) return;
         // var code = e.keyCode,
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT,
            KEYS.ENTER,
            KEYS.SPACE
        ].indexOf(e.keyCode), navIndex = Number(getAttr(curElement, "data-nav"));
        if (keyIndex >= 0) {
            if (keyIndex === 0) {
                if (navIndex > 0) setFocus(navItems[navIndex - 1]);
            } else if (keyIndex === 1) {
                if (navIndex < pages - 1) setFocus(navItems[navIndex + 1]);
            } else {
                navClicked = navIndex;
                goTo(navIndex, e);
            }
        }
    }
    function getEvent(e) {
        e = e || win.event;
        return isTouchEvent(e) ? e.changedTouches[0] : e;
    }
    function getTarget(e) {
        return e.target || win.event.srcElement;
    }
    function isTouchEvent(e) {
        return e.type.indexOf("touch") >= 0;
    }
    function preventDefaultBehavior(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
    function getMoveDirectionExpected() {
        return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }
    function onPanStart(e) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        if (autoplay && animating) stopAutoplayTimer();
        panStart = true;
        if (rafIndex) {
            caf(rafIndex);
            rafIndex = null;
        }
        var $ = getEvent(e);
        events.emit(isTouchEvent(e) ? "touchStart" : "dragStart", info(e));
        if (!isTouchEvent(e) && [
            "img",
            "a"
        ].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) preventDefaultBehavior(e);
        lastPosition.x = initPosition.x = $.clientX;
        lastPosition.y = initPosition.y = $.clientY;
        if (carousel) {
            translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ""));
            resetDuration(container, "0s");
        }
    }
    function onPanMove(e) {
        if (panStart) {
            var $ = getEvent(e);
            lastPosition.x = $.clientX;
            lastPosition.y = $.clientY;
            if (carousel) {
                if (!rafIndex) rafIndex = raf(function() {
                    panUpdate(e);
                });
            } else {
                if (moveDirectionExpected === "?") moveDirectionExpected = getMoveDirectionExpected();
                if (moveDirectionExpected) preventScroll = true;
            }
            if ((typeof e.cancelable !== "boolean" || e.cancelable) && preventScroll) e.preventDefault();
        }
    }
    function panUpdate(e) {
        if (!moveDirectionExpected) {
            panStart = false;
            return;
        }
        caf(rafIndex);
        if (panStart) rafIndex = raf(function() {
            panUpdate(e);
        });
        if (moveDirectionExpected === "?") moveDirectionExpected = getMoveDirectionExpected();
        if (moveDirectionExpected) {
            if (!preventScroll && isTouchEvent(e)) preventScroll = true;
            try {
                if (e.type) events.emit(isTouchEvent(e) ? "touchMove" : "dragMove", info(e));
            } catch (err) {}
            var x = translateInit, dist = getDist(lastPosition, initPosition);
            if (!horizontal || fixedWidth || autoWidth) {
                x += dist;
                x += "px";
            } else {
                var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
                x += percentageX;
                x += "%";
            }
            container.style[transformAttr] = transformPrefix + x + transformPostfix;
        }
    }
    function onPanEnd(e) {
        if (panStart) {
            if (rafIndex) {
                caf(rafIndex);
                rafIndex = null;
            }
            if (carousel) resetDuration(container, "");
            panStart = false;
            var $ = getEvent(e);
            lastPosition.x = $.clientX;
            lastPosition.y = $.clientY;
            var dist = getDist(lastPosition, initPosition);
            if (Math.abs(dist)) {
                // drag vs click
                if (!isTouchEvent(e)) {
                    // prevent "click"
                    var target = getTarget(e);
                    addEvents(target, {
                        "click": function preventClick(e) {
                            preventDefaultBehavior(e);
                            removeEvents(target, {
                                "click": preventClick
                            });
                        }
                    });
                }
                if (carousel) rafIndex = raf(function() {
                    if (horizontal && !autoWidth) {
                        var indexMoved = -dist * items / (viewport + gutter);
                        indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                        index += indexMoved;
                    } else {
                        var moved = -(translateInit + dist);
                        if (moved <= 0) index = indexMin;
                        else if (moved >= slidePositions[slideCountNew - 1]) index = indexMax;
                        else {
                            var i = 0;
                            while(i < slideCountNew && moved >= slidePositions[i]){
                                index = i;
                                if (moved > slidePositions[i] && dist < 0) index += 1;
                                i++;
                            }
                        }
                    }
                    render(e, dist);
                    events.emit(isTouchEvent(e) ? "touchEnd" : "dragEnd", info(e));
                });
                else if (moveDirectionExpected) onControlsClick(e, dist > 0 ? -1 : 1);
            }
        } // reset
        if (options.preventScrollOnTouch === "auto") preventScroll = false;
        if (swipeAngle) moveDirectionExpected = "?";
        if (autoplay && !animating) setAutoplayTimer();
    } // === RESIZE FUNCTIONS === //
    // (slidePositions, index, items) => vertical_conentWrapper.height
    function updateContentWrapperHeight() {
        var wp = middleWrapper ? middleWrapper : innerWrapper;
        wp.style.height = slidePositions[index + items] - slidePositions[index] + "px";
    }
    function getPages() {
        var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
        return Math.min(Math.ceil(rough), slideCount);
    }
    /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */ function updateNavVisibility() {
        if (!nav || navAsThumbnails) return;
        if (pages !== pagesCached) {
            var min = pagesCached, max = pages, fn = showElement;
            if (pagesCached > pages) {
                min = pages;
                max = pagesCached;
                fn = hideElement;
            }
            while(min < max){
                fn(navItems[min]);
                min++;
            } // cache pages
            pagesCached = pages;
        }
    }
    function info(e) {
        return {
            container: container,
            slideItems: slideItems,
            navContainer: navContainer,
            navItems: navItems,
            controlsContainer: controlsContainer,
            hasControls: hasControls,
            prevButton: prevButton,
            nextButton: nextButton,
            items: items,
            slideBy: slideBy,
            cloneCount: cloneCount,
            slideCount: slideCount,
            slideCountNew: slideCountNew,
            index: index,
            indexCached: indexCached,
            displayIndex: getCurrentSlide(),
            navCurrentIndex: navCurrentIndex,
            navCurrentIndexCached: navCurrentIndexCached,
            pages: pages,
            pagesCached: pagesCached,
            sheet: sheet,
            isOn: isOn,
            event: e || {}
        };
    }
    return {
        version: "2.9.4",
        getInfo: info,
        events: events,
        goTo: goTo,
        play: play,
        pause: pause,
        isOn: isOn,
        updateSliderHeight: updateInnerWrapperHeight,
        refresh: initSliderTransform,
        destroy: destroy,
        rebuild: function() {
            return tns(extend(options, optionsElements));
        }
    };
};
exports.tns = tns;

},{}]},["2REvP","45gvb"], "45gvb", "parcelRequirec47d")

//# sourceMappingURL=main.js.map
