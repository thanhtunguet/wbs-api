import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { name, description, version } from '../package.json';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NODE_ENV } from './config/dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const documentBuilder = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version);

  if (NODE_ENV !== 'production') {
    documentBuilder.addServer('http://localhost:3000');
  }

  const config = documentBuilder.build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
