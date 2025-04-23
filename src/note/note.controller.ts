/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note, note_status } from './note.model';
import { NoteDto } from './dto/create-note.dto';

@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}

    @Get()
    getNotes():any {
        return this.noteService.getNotes();
    }
    @Get('/:id')
    getNoteById(@Param('id') id: string): Note | undefined {
        return this.noteService.getNoteById(id);
    }

    @Patch('/status/:id')
    updateNote(@Param('id') id:string, @Body('status') status:note_status){
        return this.noteService.updateNote(id, status);
    }

    @Post()
    createNote(@Body() noteDto: NoteDto): Note {
        return this.noteService.createNote(noteDto);
    }

}
