import { animate, style, transition, trigger, query, stagger } from '@angular/animations';
import { Component } from '@angular/core';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';



@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss'],
  animations: [
    trigger('itemAnim',[
      
        //entry animation
        transition('void => *',[
          //initial state
          style({
            height:0,
            opacity:0,
            transform:'scale(o.85)',
            'margin-bottom': 0,

            //we have to expand out the padding properties
            paddingTop: 0,
            paddingBotton:0,
            paddingRight:0,
            paddingLeft:0,

          }),
          animate('50ms', style({
            height:'*', 
            'margin-bottom': '*',
            paddingTop: '*',
            paddingBotton:'*',
            paddingLeft:'*',
            paddingRight:'*',
          })),
          animate(100)
        ]),

        transition('* => void', [
          animate(50, style({
            transform: 'scale(1.05)'
          })),
          animate(50, style({
            transform: 'scale(1)',
            opacity: 0.75
          })),
          animate('120ms ease-out', style({
            transform: 'scale(0.68)',
            opacity: 0,

          })),

          animate('150ms ease-out', style({
            height: 0,
            paddingTop: 0,
            paddingBotton:0,
            paddingRight:0,
            paddingLeft:0,
            'margin-bottom':'0',

          }))
        ])
      ]),

      trigger('listAnim',[
        transition('* => *',[
          query(':enter',[
            style({
              opacity: 0,
              height: 0, 
            }),
            stagger(100, [
              animate('0.2s ease')
            ])
          ], {
            optional: true
          })
        ])
      ])
    
  ]
  
})



export class NoteslistComponent {

notes: Note[] =new Array<Note>();

constructor(private notesService: NotesService){

}

ngOnInit(){
  // we want to retrieve all notes from Notes Service

 this.notes = this.notesService.getAll();


 console.log(this.notes);
}

deleteNote(id: number){
  this.notesService.delete(id);
}

filter(query:string){
  query = query.toLowerCase().trim();
  let allResults: Note[] = new Array<Note>();

  //split up the search query into individual parts

  let terms: string[] = query.split('');

  //remove duplicate search
  terms = this.removeDuplicates(terms);

  terms.forEach(word => {
    let results: Note[] = this.relavantNotes(terms);

    allResults = [...allResults, ...results]

  });

  //allResults will include dupicate notes
  let uniqueResults = this.removeDuplicates(allResults);


}

removeDuplicates(arr: Array<any>) : Array<any> {
  let uniqueResults: Set<any>= new Set<any>();
  //loop through the array anfd add the items to the set
  arr.forEach(e => uniqueResults.add(e));

  return Array.from(uniqueResults);
}
relavantNotes(query: any) : Array<Note>{ 

  query = query.toLowerCase().trim();
  let relevantNotes = this.notes.filter(note => {
    if (note?.body?.toLowerCase().includes(query) || note?.title?.toLowerCase().includes(query)){
      return true;
    }
    return false;
  })

return relevantNotes;
}
}
