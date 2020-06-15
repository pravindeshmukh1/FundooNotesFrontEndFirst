import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { NoteService } from '../../../services/note.service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  pinned: boolean = false;

  @Output() getNotes: EventEmitter<any> = new EventEmitter();
  constructor(
    private noteService: NoteService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  noteData: FormGroup;
  noteValidator() {
    this.noteData = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }
  resetValue() {
    this.noteData = null;
  }
  
  pinNote() {
    this.pinned = !this.pinned;
  }

  onClose() {
    let note = {
      title: this.noteData.value.title,
      description: this.noteData.value.description,
    };
    this.noteService.addNote(note).subscribe(
      (res: any) => {
        this.getNotes.emit;
        this.snackBar.open('Note Added', '', {
          duration: 4000,
        });
      },
      (err) => {
        this.snackBar.open('Note Not Added', 'please try again', {
          duration: 4000,
        });
      }
    );
  }

  ngOnInit(): void {
    this.noteValidator();
  }
}
