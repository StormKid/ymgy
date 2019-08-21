import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'ws';
import { Logger, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@WebSocketGateway(8100)
@UseGuards(AuthGuard)
export class TotalGateway implements OnGatewayConnection,OnGatewayDisconnect{
  handleDisconnect(client: any) {
  }
  handleConnection(client: any, ...args: any[]) {
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  async handleMessage(client: any, payload: any) {
    Logger.warn(client);
    Logger.warn(payload);
    return await client.server.emit('hello');
  }

  async emitMassage(msg){
    this.server.emit(msg);
  }
}
