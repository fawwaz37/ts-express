"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("../controllers/userController"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    UserRoutes.prototype.routes = function () {
        this.router.get('/', userController_1.default.index);
        this.router.post('/create', userController_1.default.create);
        this.router.get('/show/:id', userController_1.default.show);
        this.router.post('/update/:id', userController_1.default.update);
        this.router.get('/del/:id', userController_1.default.delete);
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
