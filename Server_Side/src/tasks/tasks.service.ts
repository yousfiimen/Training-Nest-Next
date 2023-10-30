import { Injectable, Query } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
private tasks = [];

    create(body) {
        const task = {
            id:uuidv4(),
            ...body
        }
        return this.tasks.push(task);
    }
   
    findTasks(query) {
        if(Object.keys(query).length > 0 ) {
            const { name } = query;
            if(name) {
                return this.tasks.filter((task) => task.name.includes(name));
            }
        }
        return this.tasks;
    }
    

    findTask(params) {
        return this.tasks.filter((task)=> task.id === params.id);
    }
    

    updateTask(params, body) {
        return {...params, body};
    }
    

    deleteTask(params) {
        return params;
    }

}
