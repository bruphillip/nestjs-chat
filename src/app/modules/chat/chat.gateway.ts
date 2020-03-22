import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import ClientService from './client.service';
import { ChatService } from './chat.service';
import { IChat } from './chat.interface';
import ClientPipe from '~/interceptors/client.pipe';

@WebSocketGateway()
export default class ChatGateway {
  constructor(
    private clientService: ClientService,
    private chatService: ChatService
  ) {}

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody(ClientPipe) body: IChat,
    @ConnectedSocket() client: Socket
  ) {
    const message = await this.chatService.createMessage(body);
    client.client.server.emit('message', message);
  }

  @SubscribeMessage('register')
  handleRegister(client: Socket, payload: { name: string }) {
    this.clientService.connectClient({
      key: client.id,
      name: payload.name,
    });
  }
}
