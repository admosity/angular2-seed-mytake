import * as _ from 'lodash';
import * as classnames from 'classnames';

import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';

@Directive({
  selector: '[appCol]'
})
export class ColDirective implements OnInit {

  @Input() sm: number;
  @Input() md: number;
  @Input() lg: number;
  @Input("appCol") appCol;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    const cns = _.split(this.generateClassname(), " ");
    _.each(cns, cn => {
      this.renderer.setElementClass(this.el.nativeElement, cn, true);
    })
  }

  generateClassname(): string {
    const cn = {};

    if (this.sm) {
      cn['small-' + this.sm] = true;
    }
    if (this.md) {
      cn['medium-' + this.md] = true;
    }
    if (this.lg) {
      cn['large-' + this.lg] = true;
    }

    cn['column'] = true;

    return classnames(cn);
  }

}
