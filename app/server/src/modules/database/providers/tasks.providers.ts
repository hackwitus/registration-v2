import { Connection } from 'mongoose';
import { TaskSchema } from '../schemas/tasks.schema';

export const tasksProviders = [
  {
    provide: 'TASK_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Task', TaskSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
