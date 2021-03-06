import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'evo-toolbar',
    template: `
    <md-toolbar color="primary">
      <button md-icon-button (click)="openMenu.emit()">
        <md-icon>menu</md-icon>
      </button>
      <ng-content></ng-content>
    </md-toolbar>
  `
})
export class ToolbarComponent {
    @Output() openMenu = new EventEmitter();
}
