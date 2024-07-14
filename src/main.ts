import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'arnabishakh',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }, 
    }),
  );

  await app.listen(3000);
}

bootstrap();