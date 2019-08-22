import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  elem: any;

  // constructor(private elem:ElementRef) { 
  //   this.elem.nativeElement.style.textDecoration='line-through';
  // }
  // private textDeco(action:string){
  //   this.elem.nativeElement.style.textDecoration=action;

  // }
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
