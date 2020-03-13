import { Module } from '@nestjs/common';

/** Modules */
import { AppModule } from './app/app.module';
import { ProviderModule } from './providers/providers.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [AppModule, ProviderModule, WebsocketModule],
  providers: [ProviderModule],
})
export class RootModule {}
