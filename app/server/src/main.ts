import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import chalk from 'chalk';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap(port: number | string) {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('HackWITus Registration V2')
    .setDescription('The API Documentation for our new registration site')
    .setVersion('1.0')
    .addTag('tasks')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    // tslint:disable-next-line:no-console
    console.log(chalk.green(`App listening on port ${chalk.blue('' + port)}`));
  }
}
bootstrap(process.env.PORT);
