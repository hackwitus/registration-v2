import express from 'express';
import winston from 'winston';
import { resolve } from 'path';
import * as bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import expressWinston from 'express-winston';
import { config as dotenvConfig } from 'dotenv';

import userRoutes from './routes/user.routes';

class App {
  public app: express.Application;
  public router: express.Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.config();
  }

  private config(): void {
    dotenvConfig({ path: resolve(__dirname, '.env') });
    this.setupMiddlewares();
    this.setupRoutes(process.env.BASE_URL);
  }

  private setupMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(
      cookieSession({
        keys: [process.env.COOKIE_KEY]
      })
    );
    this.setupLogger();
    this.app.use(this.router);
  }

  private setupLogger(): void {
    this.app.use(
      expressWinston.logger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.json()
        ),
        meta: true,
        msg: 'HTTP {{req.method}} {{req.url}}',
        expressFormat: true,
        colorize: false
      })
    );
    this.app.use(
      expressWinston.errorLogger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.json()
        )
      })
    );
  }

  private setupRoutes(baseURL: string): void {
    this.router.use(`${baseURL}`, userRoutes);
  }
}

export default new App().app;
