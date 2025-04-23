/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [TasksModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
