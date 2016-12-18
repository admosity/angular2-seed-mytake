import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AccountService } from './account.service';
import { IAccount } from './account.model';
import { IAppState } from '../../application.model';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [{ provide: AccountService, useClass: AccountService }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {
  private _accountService: AccountService;
  accounts: Observable<Array<IAccount>>;

  constructor(accountService: AccountService, private store: Store<IAppState>) {
    this._accountService = accountService;
    this.accounts = store.select("accounts") as Observable<Array<IAccount>>;
  }

  ngOnInit() {
    console.log(" !!!!!! on init");
  }

  onClick() {
    this._accountService.fetchAccountWithId("fakeAcctId");
  }

  ngOnChanges() {
    console.log(" !!!!!! in ngonchange");
  }

  ngDoCheck(){
   // console.log(" !!!! on do check called!!!!");
  }

  ngAfterContentChecked(){
    //console.log(" !!!! on after content changed");
  }

  ngAfterViewInit(){
   // console.log(" !!!!!! on after view init")
  }



}
