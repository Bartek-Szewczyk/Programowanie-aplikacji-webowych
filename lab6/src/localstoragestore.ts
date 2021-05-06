import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class LocalStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let notesValue= <string>localStorage.getItem('notes');
        let notesOld = <Note[]>JSON.parse(notesValue)
        let notesNew=[]
        for (let note of notesOld) {
            
            if(note.id!==id)
                notesNew.push(note)
        }
        localStorage.setItem('notes', JSON.stringify(notesNew));
    }
    
    public addNote(note: Note): void {
        let notesValue= <string>localStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValue)
        if (!notes)
            notes=[]
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        

    }

    public getNotes(): Note[] {
        let notesValue= <string>localStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValue)
        return notes;
    }
   
}