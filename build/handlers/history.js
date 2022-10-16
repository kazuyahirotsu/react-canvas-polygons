"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"===_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!==_typeof(a)||null===a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var d=c.call(a,b||"default");if("object"!==_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}/* Inspired by: https://codepen.io/abidibo/pen/rmGBc */ /**
 * This module handles the undo and redo of canvas
 * drawing
 */var history={};function removeLine(a){a.Line.pop();var b=_objectSpread({},a);return b}function removeProperty(a,b){var c=b[a],d=_objectWithoutProperties(b,[a].map(_toPropertyKey));return d}history.cancel=function(a,b){var c;return"Line"===a?c=removeLine(b):a&&(c=removeProperty(a,b)),c},history.filterPolygon=function(a){return Object.keys(a).reduce(function(b,c){return c.startsWith("Poly")&&3>c.length?b:(b[c]=a[c],b)},{})};// history.redo_list = [];
// history.undo_list = [];
// history.saveState = function (canvas, list, keep_redo) {
//     console.log('history save state');
//     keep_redo = keep_redo || false;
//     if (!keep_redo) {
//         this.redo_list = [];
//     }
//     (list || this.undo_list).push(canvas.toDataURL());
//     console.log(this.undo_list);
// };
// history.undo = function (canvas, ctx) {
//     console.log('history UNDO');
//     this.restoreState(canvas, ctx, this.undo_list, this.redo_list);
// };
// history.redo = function (canvas, ctx) {
//     this.restoreState(canvas, ctx, this.redo_list, this.undo_list);
// };
// history.restoreState = function (canvas, ctx, pop, push) {
//     if (pop.length) {
//         this.saveState(canvas, push, true);
//         var restore_state = pop.pop();
//         var img = document.createElement('img');
//         img.src = restore_state;
//         img.onload = function () {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
//         }
//     }
// };
var _default=history;exports.default=_default;