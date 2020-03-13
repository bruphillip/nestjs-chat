import { Module } from '@nestjs/common';

import { ProviderModule } from '~/providers/providers.module';
import { WebsocketModule } from '~/websocket/websocket.module';

import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports: [ProviderModule, WebsocketModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
