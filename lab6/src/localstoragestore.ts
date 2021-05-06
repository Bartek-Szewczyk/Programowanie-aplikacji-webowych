import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class LocalStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        throw new Error('Method not implemented.');
    }
    
    public addNote(note: Note): void {
        throw new Error('Method not implemented.');
    }

    public getNotes(): Note[] {
        throw new Error('Method not implemented.');
    }
   
}