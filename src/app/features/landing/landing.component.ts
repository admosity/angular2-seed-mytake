import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IAppState } from '../feature.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getShowSidenav } from '../feature.reducers';

@Component({
    selector: 'mos-landing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
       <evo-layout>
            <evo-sidenav [open]="showSidenav$ | async">
                <h1> Hi </h1>
            </evo-sidenav>
       </evo-layout>
    `
})
export class LandingComponent {
    showSidenav$: Observable<boolean>;

    constructor(private store: Store<IAppState>) {
        this.showSidenav$ = this.store.select(getShowSidenav);
    }
}