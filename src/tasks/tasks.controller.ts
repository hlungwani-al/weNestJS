/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor (private taskService: TasksService){}
    @Get()
    getTasks(@Query() filterDTO: GetTasksFilterDto ): Task []{
        if(Object.keys(filterDTO).length){
            return this.taskService.getTaskWithFilters(filterDTO);
        }else{
         return this.taskService.getAllTasks();   
        }      
    }

    @Post()
    createTask(@Body() createTaskDto :CreateTaskDto): Task{
        return this.taskService.createTask(createTaskDto);
    }
    @Delete('/:id')
    deleteTask(@Param('id') id:string): void{
        this.taskService.deleteTask(id);
    }
    @Patch('/:id/status')
    updateTask(@Param('id') id:string, @Body('status') status : TaskStatus) {
        return this.taskService.updateTask(id, status);
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string): Task | undefined{
        return this.taskService.getTaskById(id);
    }
}

