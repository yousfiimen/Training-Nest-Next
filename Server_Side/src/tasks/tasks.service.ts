import { HttpException, HttpStatus, Injectable, NotFoundException, Query } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './interfaces/task.interface';



@Injectable()
export class TasksService {
private tasks: Task [] = [];

    create(body) {
        const task = {
            id:uuidv4(),
            ...body
        }
        this.tasks.push(task)
        return task as Task;
    }
   
   async findTasks(query): Promise<Task[]> {
        if(Object.keys(query).length > 0 ) {
            const { title } = query;
            if(title) {
                return this.tasks.filter((task) => task.title.includes(title));
            }
        }
        return await this.tasks;
    } 
    

     async findTask(id): Promise<Task> {
        const task = this.tasks.find((task)=> task.id === id);
        if (!task) {
            //throw new NotFoundException("Task not found...");
            throw new HttpException("Task not found...", HttpStatus.CONFLICT)
        }
        return task;
    }
    

    async updateTask(id, body) {
        const task = await this.findTask(id);
        return {...id, body};
    }
    

    async deleteTask(id) {
        const task = await this.findTask(id);

        return this.tasks.filter((task) => task.id != task.id
        );
    }

}
