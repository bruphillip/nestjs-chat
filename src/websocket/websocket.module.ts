import { Module } from '@nestjs/common';

import ChatWebSocket from './chat.websocket.service';

@Module({
  providers: [ChatWebSocket],
  exports: [ChatWebSocket],
})
export class WebsocketModule {}
