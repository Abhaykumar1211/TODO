import { Component,ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent {

  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;


  constructor(private renderer: Renderer2){  }

  ngOnInit(){

    //work out if there is a text overflow and if so show truncator

    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight =parseInt(style.getPropertyValue("height"), 10);
    //if there is a text overflow show the fade out
    if(this.bodyText.nativeElement.scrollHeight > viewableHeight){
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block' );
    
    }else{

      //else{thsere is text overflow hide the fade out truncator}
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
        }
    



  }

}
