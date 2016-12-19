import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'evo-navitem',
    template: `
    <a md-list-item [routerLink]="routerLink" (click)="activate.emit()">
      <md-icon md-list-icon>{{ icon }}</md-icon>
      <span md-line><ng-content></ng-content></span>
      <span md-line class="secondary">{{ hint }}</span>
    </a>
  `,
    styles: [`
    .secondary {
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class NavitemComponent {
    @Input() icon: string = '';
    @Input() hint: string = '';
    @Input() routerLink: string | any[] = '/';
    @Output() activate = new EventEmitter();
}
