import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO, createTaskSchema } from './dto/create-task.dto';
import { ZodValidationPipe } from 'src/lib/zod/zod.pipe';
import { updateTaskDTO, updateTaskSchema } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
constructor(private tasksService: TasksService) {}

@Post()
create(@Body(new ZodValidationPipe(createTaskSchema)) body: CreateTaskDTO) {
    return this.tasksService.create(body);
}

@Get()
findTasks(@Query() query) {
    return this.tasksService.findTasks(query);
}


@Get(':id')
findTask(@Param('id', ParseIntPipe) id) {
    return this.tasksService.findTask(id);
}


@Put(':id')
updateTask(@Param('id', ParseIntPipe) id, @Body(new ZodValidationPipe(updateTaskSchema)) body: updateTaskDTO) {
    return this.tasksService.updateTask(id, body);
}

@Delete(':id')
deleteTask(@Param('id', ParseIntPipe) id) {
    return this.tasksService.deleteTask(id);
}


}
