import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  @Input() set color( value: string ){
    console.log({color: value})
    this._color = value;
    this.setStyle();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log(el);
    this.htmlElement = el;

    // this.htmlElement.nativeElement.innerHTML = 'Hola Mundo';
  }

  setStyle():void {
    if ( !this.htmlElement )return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }


}
