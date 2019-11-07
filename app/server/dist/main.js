"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const chalk_1 = require("chalk");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap(port) {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(port);
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        console.log(chalk_1.default.green(`App listening on port ${chalk_1.default.blue('' + port)}`));
    }
}
bootstrap(process.env.PORT);
//# sourceMappingURL=main.js.map