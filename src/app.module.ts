import { Module } from '@nestjs/common';

/** Modules */
import { ChatModule } from './chat/chat.module';
import { ProviderModule } from './providers/providers.module';

@Module({
  imports: [ChatModule, ProviderModule],
  controllers: [],
  providers: [ProviderModule],
})
export class AppModule {}
