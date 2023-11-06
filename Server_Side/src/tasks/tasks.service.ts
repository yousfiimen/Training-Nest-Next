import { Injectable, Query } from '@nestjs/common';
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
    

     async findTask(params): Promise<Task> {
        return this.tasks.find((task)=> task.id === params.id);
    }
    

    updateTask(params, body) {
        return {...params, body};
    }
    

    deleteTask(params) {
        const task = this.findTask(params);

        return this.tasks.filter((task) => task.id != params.id
        );
    }

}
