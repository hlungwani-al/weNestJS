/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as auto_id } from 'uuid';

@Injectable()
export class TasksService {
    private tasks:Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
    createTask(title: string, description: string):Task {
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
