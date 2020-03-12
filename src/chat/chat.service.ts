import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { CHAT_PROVIDER } from '../providers/chat.provider';
import { Chat } from './chat.interface';

@Injectable()
export class ChatService {
  constructor(@Inject(CHAT_PROVIDER) private readonly chatModel: Model<Chat>) {}

  async createMessage(chatMessage: Chat): Promise<Chat> {
    const createdMessage = await this.chatModel.create(chatMessage);

    return createdMessage.save();
  }

  async findAll(): Promise<Chat[]> {
    return this.chatModel.find();
  }
}
