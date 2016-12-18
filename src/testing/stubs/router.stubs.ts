export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import { Component, Directive, Injectable, Input } from '@angular/core';

import { NavigationExtras } from '@angular/router';

@Component({
    selector: 'router-outlet',
    template: ''
})
export class RouterOutletStubComponent{}

@Directive({
    selector: '[routerLink]',
    host: {
        '(click)': 'onClick()'
    }
})
export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
    navigateTo: any = null;
    onClick() {
        this.navigateTo = this.linkParams;
    }
}