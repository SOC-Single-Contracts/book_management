import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Applying global validation pipe to validate incoming requests
  app.useGlobalPipes(new ValidationPipe());

  // Starting the application server
  await app.listen(3000);
}
bootstrap();
