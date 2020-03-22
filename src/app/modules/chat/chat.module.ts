import { Module } from '@nestjs/common';

import { ProviderModule } from '~/providers/providers.module';

import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

import ChatGateway from './chat.gateway';

import ClientService from './client.service';
import ClientPipe from '~/interceptors/client.pipe';

@Module({
  imports: [ProviderModule],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway, ClientService, ClientPipe],
})
export class ChatModule {}
