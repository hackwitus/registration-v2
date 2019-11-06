import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(port: number | string) {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    // tslint:disable-next-line:no-console
    console.log(`App listening on port ${port}`);
  }
}
bootstrap(8080);
