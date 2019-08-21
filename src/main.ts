import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { WsAdapter } from '@nestjs/platform-ws';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
     transport: Transport.TCP,
     options : {
         retryAttempts : 100,
         retryDelay : 10000,
     },
  });
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.startAllMicroservicesAsync();
  await app.listen(7897);
}
bootstrap();
