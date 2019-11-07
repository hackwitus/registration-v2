import * as mongoose from 'mongoose';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: [TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE],
    default: TaskStatus.OPEN,
  },
});
