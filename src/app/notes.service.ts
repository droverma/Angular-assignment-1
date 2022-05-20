import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {
  baseURL: string = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>(`${this.baseURL}notes`);
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(`${this.baseURL}notes`, note);
  }
}
