import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { CHAT_PROVIDER } from '~/providers/chat.provider';
import ChatWebSocket from '~/websocket/chat.websocket.service';

import { IChat } from './chat.interface';

@Injectable()
export class ChatService {
  constructor(
    @Inject(CHAT_PROVIDER) private readonly chatModel: Model<IChat>,
    private readonly chatSocket: ChatWebSocket
  ) {}

  async createMessage(chatMessage: IChat): Promise<IChat> {
    const createdMessage = await this.chatModel.create(chatMessage);

    return createdMessage.save();
  }

  async findAll(): Promise<IChat[]> {
    this.chatSocket.server.emit('chat', { message: 'emitted by server' });

    return this.chatModel.find();
  }
}
