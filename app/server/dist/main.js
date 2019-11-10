"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const chalk_1 = require("chalk");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap(port) {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('HackWITus Registration V2')
        .setDescription('The API Documentation for our new registration site')
        .setVersion('1.0')
        .addTag('tasks')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port);
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        console.log(chalk_1.default.green(`App listening on port ${chalk_1.default.blue('' + port)}`));
    }
}
bootstrap(process.env.PORT);
//# sourceMappingURL=main.js.map