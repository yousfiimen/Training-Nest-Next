import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
constructor(private tasksService: TasksService) {}

@Post()
create(@Body() body) {
    return this.tasksService.create(body);
}

@Get()
findTasks(@Query() query) {
    return this.tasksService.findTasks(query);
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
