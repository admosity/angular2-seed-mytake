import {ACTIONS} from './account.reducer';
import {IAccount} from './account.model';
import { IAppState } from '../../application.model';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class AccountService {

  accounts: Observable<Array<IAccount>>;

  constructor(private store:Store<IAppState>) { 
      this.accounts = store.select('accounts') as Observable<Array<IAccount>>;
      // this.accounts.subscribe(delta => {
      //     console.log("in subscribe observer, on change = ", delta);
      // });
  }
  
  fetchAccountWithId(accountId:string) {
    console.log("-----just testing service");
    const testdata:IAccount = {
        account_id: "test",
        account_name: "test account"
    }
    this.store.dispatch({type:ACTIONS.add_account, payload: testdata});
  }
}
