"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.prototype.index = function (req, res) {
        return res.send('ini Users');
    };
    userController.prototype.create = function (req, res) {
        return res.send(req.body);
    };
    return userController;
}());
exports.default = new userController();
