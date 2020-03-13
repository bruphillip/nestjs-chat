import { Module } from '@nestjs/common';

import databases from '~/databases';
import ChatProvider from './chat.provider';

@Module({
  providers: [...databases, ChatProvider],
  exports: [ChatProvider],
})
export class ProviderModule {}
