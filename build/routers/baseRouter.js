"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var baseRoutes = /** @class */ (function () {
    function baseRoutes() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    return baseRoutes;
}());
exports.default = baseRoutes;
