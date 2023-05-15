import { Component,ElementRef, Renderer2, ViewChild,Input, EventEmitter, Output } from '@angular/core';
import { NoteslistComponent } from '../pages/noteslist/noteslist.component';


@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent {

  @Input("title")
  title!: any;
  @Input("body") 
  body!: any; 
  @Input("link") 
  link!:string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

 

  // @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  // @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;


  constructor(private renderer: Renderer2, Note:NoteslistComponent){  
    console.log(Note.notes[0].title)
  }
  
  ngOnInit(){

    console.log(this.title);
    console.log(this.body);

    // //work out if there is a text overflow and if so show truncator

    // let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    // let viewableHeight =parseInt(style.getPropertyValue("height"), 10);
    // //if there is a text overflow show the fade out
    // if(this.bodyText.nativeElement.scrollHeight > viewableHeight){
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block' );
    
    // }else{

    //   //else{thsere is text overflow hide the fade out truncator}
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    //     }
    



  }

  onXButtonClick(){
    this.deleteEvent.emit();
  

  }

}
