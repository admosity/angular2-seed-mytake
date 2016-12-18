import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';

@Directive({
  selector: '[appContainer]'
})
export class ContainerDirective implements OnInit {

  fld: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    console.log("init fld = " + this.fld)
  }

  @Input() set fluid(fld: boolean) {
    if (fld) {
      this.renderer.setElementClass(this.el.nativeElement, "expanded", true);
    } else {
      this.renderer.setElementClass(this.el.nativeElement, "column", true);
    }

    this.renderer.setElementClass(this.el.nativeElement, "row", true);

  }

  @Input("appContainer") appContainer;

}
