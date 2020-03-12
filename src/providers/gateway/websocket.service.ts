import {
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
} from '@nestjs/websockets';
import { SubscribeMessage } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export default class WebSocket implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('INIT');
  }

  @SubscribeMessage('chat')
  handleMessage(client: Socket, payload: string): void {
    console.log(payload);
  }
}
