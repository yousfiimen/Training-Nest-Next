import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
constructor(private tasksService: TasksService) {}

@Post()
create(@Body() body) {
    return this.tasksService.create(body);
}

@Get()
findTasks(@Body() body) {
    return this.tasksService.findTasks(body);
}


@Get(':id')
findTask(@Param() params) {
    return this.tasksService.findTask(params);
}


@Put(':id')
updateTask(@Param() params, @Body() body) {
    return this.tasksService.updateTask(params, body);
}

@Delete(':id')
deleteTask(@Param() params) {
    return this.tasksService.deleteTask(params);
}


}
