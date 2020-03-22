import { Module } from '@nestjs/common';

/** Modules */
import { AppModule } from './app/app.module';
import { ProviderModule } from './providers/providers.module';
@Module({
  imports: [AppModule, ProviderModule],
  providers: [ProviderModule],
})
export class RootModule {}
