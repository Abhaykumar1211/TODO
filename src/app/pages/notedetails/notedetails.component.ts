import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-notedetails',
  templateUrl: './notedetails.component.html',
  styleUrls: ['./notedetails.component.scss']
})
export class NotedetailsComponent implements OnInit {

  note: Note = new Note;
  noteId!: number;
  new!: boolean;


  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute){}


ngOnInit(){

  //to find if we are creating new or editing it\
  this.route.params.subscribe((params: Params) =>{
    this.note = new Note();
    if(params['id']){
      this.note = this.notesService.get(params['id']);
      this.noteId = params['id'];
      this.new=false;
    } else{
      this.new=true;
    }
  })


  
}


onSubmit(form: NgForm){
  console.log(form.value);

  if(this.new){
    //save the note
  this.notesService.add(form.value);
  

  } else{
    this.notesService.update(this.noteId, form.value.title, form.value.body);
  }

  this.router.navigateByUrl('/');

}

cancel() {
  this.router.navigateByUrl('/');
}

}
