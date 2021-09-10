"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = require("dotenv");
// Router
var users_1 = __importDefault(require("./routers/users"));
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
        (0, dotenv_1.config)();
    }
    App.prototype.plugins = function () {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    };
    App.prototype.routes = function () {
        this.app.get('/', function (req, res) {
            res.send('Masuk Pak Eko');
        });
        this.app.use('/users', users_1.default);
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
app.listen(process.env.PORT, function () {
    console.log("App Listening at http://localhost:" + process.env.PORT);
});
