import { HttpException, HttpStatus, Injectable, NotFoundException, Query } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { PrismaService } from 'src/lib/prisma.service';
import { Task } from '@prisma/client';



@Injectable()
export class TasksService {
    constructor(private PrismaService: PrismaService) {}
private tasks: Task [] = [];

 async   create(body) {
    const data = await this.PrismaService.task.create({
         data: {
            title: body.title,
            description: body.description
         }
        })
      return data;
    }
   
   async findTasks(query): Promise<Task[]> {
        if(Object.keys(query).length > 0 ) {
            const { title } = query;
            if(title) {
            const data = await this.PrismaService.task.findMany({
            where: {
                title: {
                    contains: title,
                }
            }
        });

                return data;
            }
        }
        const data = await this.PrismaService.task.findMany();
        return data;
    } 
    

     async findTask(id): Promise<Task> {
        const data = await this.PrismaService.task.findFirst({
            where: {
                id: id
            }
        })
        if(!data) {
            throw new NotFoundException("Task not found...");
        }
        return data
        // const task = this.tasks.find((task)=> task.id === id);
        // if (!task) {
        //     //throw new NotFoundException("Task not found...");
        //     throw new HttpException("Task not found...", HttpStatus.NOT_FOUND)
        // }
        // return task;
    }
    

    async updateTask(id, body) {
        const task = await this.findTask(id);
        const data = await this.PrismaService.task.update({
            where: {
                id: task.id,
            },
            data: {
                title: body.title,
                description: body.description
            }
        })
        return data;
    }
    

    async deleteTask(id) {
        const task = await this.findTask(id);
        // return this.tasks.filter((task) => task.id != task.id);
        return await this.PrismaService.task.delete({
            where: {
                id: task.id
            }
        })
    }

}
