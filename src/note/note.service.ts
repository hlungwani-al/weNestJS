/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { Note, note_status } from './note.model';
import { NoteDto } from './dto/create-note.dto';
import { v4 as auto_id } from 'uuid';

@Injectable()
export class NoteService {
    private notes:Note[] = [];

    getNotes():Note[]{
        return this.notes;
    }

    createNote(noteDto:NoteDto): Note {
       const {note_content} = noteDto;
       
       const note: Note = {
        id: auto_id(),
        note_content: note_content,
        note_status: note_status.OPEN,
       }
       this.notes.push(note);
       return note;
    }
    getNoteById(id:string) : Note  | undefined {
        return this.notes.find((note)=> note.id === id);
    }
    updateNote(id:string, status:note_status){
        const note_to_update = this.getNoteById(id) || {id:'id0000', note_content:'love is blind', note_status:"OPEN"};
        note_to_update.note_status = status;
        return note_to_update;
    }

}
