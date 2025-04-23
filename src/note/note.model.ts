/* eslint-disable prettier/prettier */
export interface Note {
    id:string,
    note_content:string,
    note_status: note_status,
}

export enum note_status {
    Completed = 'COMPLETED',
    OPEN = 'OPEN',
}