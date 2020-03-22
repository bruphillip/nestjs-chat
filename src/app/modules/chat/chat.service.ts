import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { CHAT_PROVIDER } from '~/providers/chat.provider';

import { IChat } from './chat.interface';

@Injectable()
export class ChatService {
  constructor(
    @Inject(CHAT_PROVIDER) private readonly chatModel: Model<IChat>
  ) {}

  async createMessage(chatMessage: IChat): Promise<IChat> {
    const createdMessage = await this.chatModel.create(chatMessage);

    return createdMessage.save();
  }

  async findAll(): Promise<IChat[]> {
    return this.chatModel.find();
  }
}
