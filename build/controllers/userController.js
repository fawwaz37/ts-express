"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = [
    { id: 1, name: "ini a" },
    { id: 2, name: "ini b" },
    { id: 3, name: "ini c" },
    { id: 4, name: "ini d" },
];
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.prototype.index = function (req, res) {
        return res.send(data);
    };
    userController.prototype.create = function (req, res) {
        var _a = req.body, id = _a.id, name = _a.name;
        data.push({ id: id, name: name });
        return res.send("Sukses Menambahkan: id: " + id + ", name: " + name);
    };
    userController.prototype.show = function (req, res) {
        var id = req.params.id;
        var find = data.find(function (x) { return x.id == id; });
        return res.send(find);
    };
    userController.prototype.update = function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var find = data.find(function (x) { return x.id == id; });
        find.name = name;
        return res.send("Update id: " + id + " name: " + name);
    };
    userController.prototype.delete = function (req, res) {
        var id = req.params.id;
        var deletes = data.filter(function (x) { return x.id != id; });
        return res.send(deletes);
    };
    return userController;
}());
exports.default = new userController();
