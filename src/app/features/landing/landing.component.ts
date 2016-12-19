import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CloseSidenavAction, OpenSidenavAction, getShowSidenav } from '../feature.reducers';

import { IAppState } from '../feature.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
    selector: 'mos-landing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
       <evo-layout>
            <evo-sidenav [open]="showSidenav$ | async">
                <evo-navitem (activate)="closeSidenav()" routerLink="/" icon="build">
                    Accounts
                </evo-navitem>
            </evo-sidenav>
            <evo-toolbar (openMenu)="openSidenav()">
                    Items
            </evo-toolbar>
       </evo-layout>
    `
})
export class LandingComponent {
    showSidenav$: Observable<boolean>;

    constructor(private store: Store<IAppState>) {
        this.showSidenav$ = this.store.select(getShowSidenav);
    }

    closeSidenav() {
        this.store.dispatch(new CloseSidenavAction());
    }

    openSidenav() {
        this.store.dispatch(new OpenSidenavAction());
    }
}