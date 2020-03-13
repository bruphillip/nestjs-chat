import { Module } from '@nestjs/common';

/** Modules */
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [ChatModule],
  providers: [],
})
export class AppModule {}
