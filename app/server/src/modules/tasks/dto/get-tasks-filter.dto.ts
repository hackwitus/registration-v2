import { TaskStatus } from '../../database/models/task.interface';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  @ApiModelProperty({
    required: false,
    enum: [TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE],
  })
  readonly status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  @ApiModelProperty({ required: false })
  readonly search: string;
}
