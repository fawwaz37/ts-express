"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseRouter_1 = __importDefault(require("./baseRouter"));
var userController_1 = __importDefault(require("../controllers/userController"));
var UserRoutes = /** @class */ (function (_super) {
    __extends(UserRoutes, _super);
    function UserRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRoutes.prototype.routes = function () {
        this.router.get('/', userController_1.default.index);
        this.router.post('/create', userController_1.default.create);
        this.router.get('/show/:id', userController_1.default.show);
        this.router.post('/update/:id', userController_1.default.update);
        this.router.get('/del/:id', userController_1.default.delete);
    };
    return UserRoutes;
}(baseRouter_1.default));
exports.default = new UserRoutes().router;
