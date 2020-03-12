import { Module } from '@nestjs/common';

import { ProviderModule } from '../providers/providers.module';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports: [ProviderModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
