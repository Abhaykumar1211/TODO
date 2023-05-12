import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-notedetails',
  templateUrl: './notedetails.component.html',
  styleUrls: ['./notedetails.component.scss']
})
export class NotedetailsComponent implements OnInit {

  note: Note = new Note;
  


  constructor(private notesService: NotesService, private router: Router){}


ngOnInit(){
  this.note = new Note();
}


onSubmit(form: NgForm){
  console.log(form);

  //save the note
this.notesService.add(form.value);
this.router.navigate(['/'])
}

}
