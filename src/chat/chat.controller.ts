import { Controller, Post, Get, Body } from '@nestjs/common';
import { SubscribeMessage } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import WebSocket from 'src/providers/gateway/websocket.service';
import { ChatService } from './chat.service';
import { Chat } from './chat.interface';

@Controller('chat')
export class ChatController {
  constructor(private chatProvider: ChatService, private socket: WebSocket) {}

  @Get()
  findAll(): Promise<Chat[]> {
    console.log(this.socket.server);
    return this.chatProvider.findAll();
  }

  @Post()
  store(@Body() message: Chat): Promise<Chat> {
    return this.chatProvider.createMessage(message);
  }

  @SubscribeMessage('chat')
  handleMessage(client: Socket, payload: string): void {
    console.log(payload);
  }
}
