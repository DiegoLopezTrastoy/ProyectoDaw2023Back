import { NestApplication } from "@nestjs/core";
import { Connection } from "typeorm";

const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const { config } = require('dotenv');

config();

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen((process.env.PORT)? process.env.PORT : 5000);
}
bootstrap();
