import { ActionReducer, combineReducers } from '@ngrx/store';

import { IAppState } from '../application.model';
import { accounts } from './account/account.reducer';
import { compose } from '@ngrx/core/compose';

const reducers = {
    accounts
};

const devReducers: ActionReducer<IAppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return devReducers(state, action);
}


