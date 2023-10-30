import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    
    create(body) {
        return body;
    }
   
    findTasks(body) {
        return body;
    }
    

    findTask(params) {
        return params;
    }
    

    updateTask(params, body) {
        return {...params, body};
    }
    

    deleteTask(params) {
        return params;
    }

}
