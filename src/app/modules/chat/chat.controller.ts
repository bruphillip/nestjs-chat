import { Controller, Post, Get, Body } from '@nestjs/common';

import { ChatService } from './chat.service';
import { IChat } from './chat.interface';

@Controller('chat')
export class ChatController {
  constructor(private chatProvider: ChatService) {}

  @Get()
  findAll(): Promise<IChat[]> {
    return this.chatProvider.findAll();
  }

  @Post()
  store(@Body() message: IChat): Promise<IChat> {
    return this.chatProvider.createMessage(message);
  }
}
