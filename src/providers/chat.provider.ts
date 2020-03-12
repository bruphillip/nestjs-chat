import { Connection } from 'mongoose';
import { MONGOSE_CONNECTION } from './databases/mongoose';
import { ChatSchema } from '../schemas/chat.schema';

export const CHAT_PROVIDER = 'CHAT_PROVIDER';

export default {
  provide: CHAT_PROVIDER,
  useFactory: (connection: Connection) => connection.model('Chat', ChatSchema),
  inject: [MONGOSE_CONNECTION],
};
