"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PORT = 8000;
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    App.prototype.plugins = function () {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    };
    App.prototype.routes = function () {
        this.app.get('/', function (req, res) {
            res.send('Masuk Pak Eko');
        });
        this.app.post('/posts', function (req, res) {
            console.log(req.body);
            res.send(req.body);
        });
    };
    return App;
}());
// const app = express();
//         app.use(express.urlencoded({ extended: true }));
//         app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('test')
// })
// app.post('/post', (req, res) => {
//     res.send(req.body)
// })
var app = new App().app;
app.listen(PORT, function () {
    console.log("App Listening at http://localhost:" + PORT);
});
