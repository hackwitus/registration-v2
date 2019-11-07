import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import chalk from 'chalk';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap(port: number | string) {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    // tslint:disable-next-line:no-console
    console.log(chalk.green(`App listening on port ${chalk.blue('' + port)}`));
  }
}
bootstrap(process.env.PORT);
