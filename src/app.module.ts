import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TotalGateway } from './total.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TotalGateway],
})
export class AppModule {}
