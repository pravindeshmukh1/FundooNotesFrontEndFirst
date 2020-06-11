import { Injectable } from '@angular/core';
import { HttpService } from '../http.service/http.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpService: HttpService) {}

  addNote(note: Object) {
    console.log('note', note);

    return this.httpService.postNote('notes/addNotes', note);
  }
}
