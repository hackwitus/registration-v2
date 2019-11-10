import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Task, TaskStatus } from '../../database/models/task.interface';
import { CreateTaskDto } from '../dto/create-task.dto';
import { GetTasksFilterDto } from '../dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from '../pipes/task-status-validation.pipe';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('')
  @ApiResponse({
    status: 200,
    description: 'The tasks were returned successfully',
  })
  public getTasks(
    @Query(ValidationPipe) filterDto?: GetTasksFilterDto,
  ): Promise<Task[]> {
    if (filterDto && Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  @ApiResponse({ status: 200, description: 'The task was found successfully' })
  @ApiResponse({
    status: 404,
    description: 'The task with that id could not be found',
  })
  public getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
  })
  public createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  @HttpCode(204) // Delete request should return 204 - No Content on success
  @ApiResponse({
    status: 204,
    description: 'The task was found successfully and deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'The task with that id could not be found',
  })
  public deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTaskById(id);
  }

  @Patch('/:id/status')
  @ApiResponse({
    status: 200,
    description: 'The task was found and updated successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'The status field you requested is invalid',
  })
  @ApiResponse({
    status: 404,
    description: 'The task with that id could not be found',
  })
  public updateTaskStatus(
    @Param('id') id: string,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatusById(id, status);
  }
}
