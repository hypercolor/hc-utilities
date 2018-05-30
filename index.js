(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: JsonParse, Keygen, Numbers, PromiseQueue, ResolvablePromise, RetryWithDelay, Arrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_json_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/json-parse */ "./src/json-parse.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonParse", function() { return _src_json_parse__WEBPACK_IMPORTED_MODULE_0__["JsonParse"]; });

/* harmony import */ var _src_keygen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/keygen */ "./src/keygen.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keygen", function() { return _src_keygen__WEBPACK_IMPORTED_MODULE_1__["Keygen"]; });

/* harmony import */ var _src_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/numbers */ "./src/numbers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Numbers", function() { return _src_numbers__WEBPACK_IMPORTED_MODULE_2__["Numbers"]; });

/* harmony import */ var _src_promise_queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/promise_queue */ "./src/promise_queue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseQueue", function() { return _src_promise_queue__WEBPACK_IMPORTED_MODULE_3__["PromiseQueue"]; });

/* harmony import */ var _src_resolvable_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/resolvable-promise */ "./src/resolvable-promise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolvablePromise", function() { return _src_resolvable_promise__WEBPACK_IMPORTED_MODULE_4__["ResolvablePromise"]; });

/* harmony import */ var _src_retry_with_delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/retry-with-delay */ "./src/retry-with-delay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RetryWithDelay", function() { return _src_retry_with_delay__WEBPACK_IMPORTED_MODULE_5__["RetryWithDelay"]; });

/* harmony import */ var _src_arrays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/arrays */ "./src/arrays.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arrays", function() { return _src_arrays__WEBPACK_IMPORTED_MODULE_6__["Arrays"]; });











/***/ }),

/***/ "./src/arrays.ts":
/*!***********************!*\
  !*** ./src/arrays.ts ***!
  \***********************/
/*! exports provided: Arrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrays", function() { return Arrays; });

var Arrays = (function () {
    function Arrays() {
    }
    Arrays.deduplicate = function (array, isEqual) {
        var uniques = [];
        array.forEach(function (val) {
            var found = false;
            for (var ii = 0; ii < uniques.length; ii += 1) {
                if (isEqual(val, uniques[ii])) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                uniques.push(val);
            }
        });
    };
    return Arrays;
}());



/***/ }),

/***/ "./src/json-parse.ts":
/*!***************************!*\
  !*** ./src/json-parse.ts ***!
  \***************************/
/*! exports provided: JsonParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonParse", function() { return JsonParse; });

var JsonParse = (function () {
    function JsonParse() {
    }
    /**
     * Simple wrapper of JSON.parse so it can be included in promise chains.
     * @param jsonString
     * @returns {*}
     */
    JsonParse.parse = function (jsonString) {
        return new Promise(function (resolve, reject) {
            try {
                var json = JSON.parse(jsonString);
                resolve(json);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return JsonParse;
}());



/***/ }),

/***/ "./src/keygen.ts":
/*!***********************!*\
  !*** ./src/keygen.ts ***!
  \***********************/
/*! exports provided: Keygen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keygen", function() { return Keygen; });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);

/**
 * @module Keygen
 */


var Keygen = (function () {
    function Keygen() {
    }
    /**
     * Return a unique identifier with the given `len`.
     *
     *     utils.uid(10);
     *     // => "FDaS435D2z"
     *
     * @param {Number} len
     * @return {String}
     * @api private
     */
    Keygen.uid = function (len) {
        var buf = [];
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var length = chars.length;
        for (var i = 0; i < len; ++i) {
            buf.push(chars[getRandomInt(0, length - 1)]);
        }
        return buf.join('');
    };
    /**
     * Create a HMAC using SHA512
     *
     * @param {String} key - encryption key
     * @param {String} message - message to be encrypted
     * @return {String} encrypted HMAC
     */
    Keygen.hmacSHA512 = function (key, message) {
        return new Promise(function (resolve, reject) {
            if (!message) {
                reject('hmacSHA512 input message was null or undefined.');
            }
            else if (!key) {
                reject('hmacSHA512 input key was null or undefined.');
            }
            else {
                var buf = new Buffer(key, 'utf-8');
                var hash = crypto__WEBPACK_IMPORTED_MODULE_1__["createHmac"]('sha512', buf);
                hash.update(new Buffer(message, 'utf-8'));
                resolve(hash.digest('hex'));
            }
        });
    };
    Keygen.hashSaltPassword = function (password) {
        var salt = bcrypt__WEBPACK_IMPORTED_MODULE_0__["genSaltSync"](10);
        return bcrypt__WEBPACK_IMPORTED_MODULE_0__["hashSync"](password, salt);
    };
    return Keygen;
}());

/**
 * Return a random int between min and max inclusive.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @api private
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/***/ }),

/***/ "./src/numbers.ts":
/*!************************!*\
  !*** ./src/numbers.ts ***!
  \************************/
/*! exports provided: Numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Numbers", function() { return Numbers; });

var Numbers = (function () {
    function Numbers() {
    }
    /**
     * Determine if the input is a numeric type
     *
     * @param n {Object} anything
     * @returns {boolean}
     */
    Numbers.isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    return Numbers;
}());



/***/ }),

/***/ "./src/promise_queue.ts":
/*!******************************!*\
  !*** ./src/promise_queue.ts ***!
  \******************************/
/*! exports provided: PromiseQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseQueue", function() { return PromiseQueue; });
/* harmony import */ var _resolvable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvable-promise */ "./src/resolvable-promise.ts");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-queue */ "p-queue");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p_queue__WEBPACK_IMPORTED_MODULE_1__);



var PromiseQueue = (function () {
    function PromiseQueue(maxConcurrent) {
        this.queue = new p_queue__WEBPACK_IMPORTED_MODULE_1__({ concurrency: maxConcurrent });
    }
    PromiseQueue.prototype.add = function (promiseFunction) {
        return this.queue.add(promiseFunction);
    };
    PromiseQueue.prototype.clear = function (resolvedResult) {
        if (this.pendingPromise) {
            this.queue.clear();
            this.pendingPromise.resolve(resolvedResult);
        }
        else {
            throw new Error('Promise queue clear must be used with runAllPromiseFunctionsCancellable');
        }
    };
    PromiseQueue.prototype.runAllPromiseFunctionsCancellable = function (promiseFunctions) {
        var _this = this;
        if (!promiseFunctions) {
            return Promise.reject('promiseFunctions was not supplied');
        }
        else if (promiseFunctions.length === 0) {
            return Promise.resolve([]);
        }
        else {
            promiseFunctions.forEach(function (promiseFunction) {
                _this.pendingPromise = new _resolvable_promise__WEBPACK_IMPORTED_MODULE_0__["ResolvablePromise"](_this.add(promiseFunction));
            });
            return this.pendingPromise ? this.pendingPromise.promise : Promise.resolve();
        }
    };
    PromiseQueue.prototype.runAllPromiseFunctions = function (promiseFunctions) {
        var _this = this;
        this.pendingPromise = null;
        if (!promiseFunctions) {
            return Promise.reject('promiseFunctions was not supplied');
        }
        else if (promiseFunctions.length === 0) {
            return Promise.resolve([]);
        }
        else {
            var addedPromises_1 = [];
            promiseFunctions.forEach(function (promiseFunction) {
                addedPromises_1.push(_this.add(promiseFunction));
            });
            return new Promise(function (resolve, reject) {
                Promise.all(addedPromises_1)
                    .then(function (results) {
                    resolve(results);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        }
    };
    return PromiseQueue;
}());



/***/ }),

/***/ "./src/resolvable-promise.ts":
/*!***********************************!*\
  !*** ./src/resolvable-promise.ts ***!
  \***********************************/
/*! exports provided: ResolvablePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvablePromise", function() { return ResolvablePromise; });

var ResolvablePromise = (function () {
    function ResolvablePromise(promise) {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
            promise
                .then(function (result) {
                resolve(result);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    }
    return ResolvablePromise;
}());



/***/ }),

/***/ "./src/retry-with-delay.ts":
/*!*********************************!*\
  !*** ./src/retry-with-delay.ts ***!
  \*********************************/
/*! exports provided: RetryWithDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetryWithDelay", function() { return RetryWithDelay; });
/* harmony import */ var _promise_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise_queue */ "./src/promise_queue.ts");


var RetryWithDelay = (function () {
    function RetryWithDelay() {
    }
    RetryWithDelay.retry = function (promiseFunction, numRetries, delayMs) {
        var queue = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["PromiseQueue"](1);
        var promiseFunctions = [];
        for (var ii = 0; ii < numRetries; ii++) {
            promiseFunctions.push(this.retryFunction(promiseFunction, delayMs, queue, ii, ii === numRetries - 1));
        }
        return queue.runAllPromiseFunctionsCancellable(promiseFunctions)
            .then(function (results) {
            // console.log('All promise functions complete: ' + JSON.stringify(results));
            return Promise.resolve(results);
        });
    };
    RetryWithDelay.retryFunction = function (promiseFunction, delayMs, queue, retryIndex, isLastInQueue) {
        var _this = this;
        return function () {
            return promiseFunction(retryIndex)
                .then(function (result) {
                // SUCCESS, CANCEL SUBSEQUENT EXECUTION
                // console.log('Success: ' + result);
                queue.clear(result);
                return Promise.resolve(result);
            })
                .catch(function (err) {
                // This one errored out, skip to next execution unless this was the last retry
                if (isLastInQueue) {
                    // console.log('Failed, is last one so rejecting.');
                    return Promise.reject(err);
                }
                else {
                    // console.log('Failed, delaying and retrying.');
                    return _this.delayPromise(delayMs);
                }
            });
        };
    };
    RetryWithDelay.delayPromise = function (ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    };
    return RetryWithDelay;
}());



/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.ts */"./index.ts");


/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "p-queue":
/*!**************************!*\
  !*** external "p-queue" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("p-queue");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map