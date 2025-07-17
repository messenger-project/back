import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // فقط برای توسعه! برای production حتماً دامنه دقیق بذار
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 9060, '0.0.0.0');
}
bootstrap();
