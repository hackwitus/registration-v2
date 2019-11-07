import * as mongoose from 'mongoose';
import { TaskStatus } from '../models/task.interface';

export const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: [TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE],
    default: TaskStatus.OPEN,
  },
});
