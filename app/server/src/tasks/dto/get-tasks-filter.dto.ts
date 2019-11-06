import { TaskStatus } from '../models/task.model';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
