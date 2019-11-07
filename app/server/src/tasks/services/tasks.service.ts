import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as uuid from 'uuid/v1';

import { GetTasksFilterDto } from '../dto/get-tasks-filter.dto';
import { Task, TaskStatus } from '../models/task.model';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async getTasksWithFilters({
    status,
    search,
  }: GetTasksFilterDto): Promise<Task[]> {
    let tasks = await this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task: Task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        (task: Task) =>
          task.title.includes(search) || task.description.includes(search),
      );
    }

    return tasks;
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskModel.findById(id);
    if (!found) {
      throw new NotFoundException(`Task with ID '${id}' not found`);
    }

    return found;
  }

  async createTask({ title, description }: CreateTaskDto): Promise<Task> {
    const newTask = new this.taskModel({
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    });
    return await newTask.save();
  }

  async deleteTaskById(id: string): Promise<void> {
    const found = await this.getTaskById(id);
    return await this.taskModel.findByIdAndRemove(found.id);
  }

  async updateTaskStatusById(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    return await this.taskModel.updateOne({ _id: id }, { $set: { status } });
  }
}
