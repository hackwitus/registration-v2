"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap(port) {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(port);
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        console.log(`App listening on port ${port}`);
    }
}
bootstrap(8080);
//# sourceMappingURL=main.js.map