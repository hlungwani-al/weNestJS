/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as auto_id } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks:Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
    getTaskById(id:string): Task | undefined{
        return this.tasks.find((task) => task.id === id);
    }

    deleteTask(id:string) :void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    updateTask(id:string, status: TaskStatus){
        const task = this.getTaskById(id) || {id:'12345', title:'task5', description:'xtrtyvubiop', status:'OPEN',};
        task.status = status;
        return task;
    }

    createTask(createTaskDto: CreateTaskDto):Task {
        const {title, description} = createTaskDto;
        const task:Task = {
            id:auto_id(),
            title,
            description,
            status:TaskStatus.OPEN,
        }
        this.tasks.push(task);
        return task;
    }
}
