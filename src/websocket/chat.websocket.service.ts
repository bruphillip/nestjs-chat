import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export default class ChatWebSocket {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('chat')
  handleMessage(client: Socket, payload: string): void {
    console.log('eita', payload);
  }
}
