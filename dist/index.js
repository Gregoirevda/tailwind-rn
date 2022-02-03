"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailwindContext = exports.useTailwind = exports.TailwindProvider = exports.create = void 0;
var create_1 = require("./create");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return create_1.default; } });
var tailwind_provider_1 = require("./tailwind-provider");
Object.defineProperty(exports, "TailwindProvider", { enumerable: true, get: function () { return tailwind_provider_1.default; } });
var use_tailwind_1 = require("./use-tailwind");
Object.defineProperty(exports, "useTailwind", { enumerable: true, get: function () { return use_tailwind_1.default; } });
var tailwind_context_1 = require("./tailwind-context");
Object.defineProperty(exports, "TailwindContext", { enumerable: true, get: function () { return tailwind_context_1.default; } });
__exportStar(require("./types"), exports);
