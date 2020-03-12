import * as mongoose from 'mongoose';

export const MONGOSE_CONNECTION = 'MONGOOSE_CONNECTION';

export default {
  provide: MONGOSE_CONNECTION,
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect('mongodb://localhost:27017/quetzalcoatl', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
};
