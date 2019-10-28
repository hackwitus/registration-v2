"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winston_1 = __importDefault(require("winston"));
const path_1 = require("path");
const bodyParser = __importStar(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const express_winston_1 = __importDefault(require("express-winston"));
const dotenv_1 = require("dotenv");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
class App {
    constructor() {
        this.app = express_1.default();
        this.router = express_1.default.Router();
        this.config();
    }
    config() {
        dotenv_1.config({ path: path_1.resolve(__dirname, '.env') });
        this.setupMiddlewares();
        this.setupRoutes(process.env.BASE_URL);
    }
    setupMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookie_session_1.default({
            keys: [process.env.COOKIE_KEY]
        }));
        this.app.use(express_winston_1.default.logger({
            transports: [new winston_1.default.transports.Console()],
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.json()),
            meta: true,
            msg: 'HTTP {{req.method}} {{req.url}}',
            expressFormat: true,
            colorize: false
        }));
        this.app.use(this.router);
    }
    setupRoutes(baseURL) {
        this.router.use(`${baseURL}/login`, user_routes_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map