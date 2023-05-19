const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const { config } = require('dotenv');

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen((process.env.PORT)? process.env.PORT : 5000);
}
bootstrap();
