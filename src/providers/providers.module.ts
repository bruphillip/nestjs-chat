import { Module } from '@nestjs/common';

import databases from './databases';
import ChatProvider from './chat.provider';
import WebSocket from './gateway/websocket.service';

@Module({
  providers: [...databases, ChatProvider, WebSocket],
  exports: [...databases, ChatProvider, WebSocket],
})
export class ProviderModule {}
