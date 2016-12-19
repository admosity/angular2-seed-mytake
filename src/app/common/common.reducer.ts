import * as layout from './layout/layout.reducer';

import { ActionReducer, combineReducers } from '@ngrx/store';

import { ILayout } from './layout/layout.model';
import { compose } from '@ngrx/core/compose';
import { createSelector } from 'reselect';

const commonReducers = {
    layout: layout.layoutReducer
};

const combinedReducers: ActionReducer<any> = combineReducers(commonReducers);

export function reducer(state: any, action: any) {
    return combinedReducers(state, action);
}

export { CloseSidenavAction, OpenSidenavAction } from './layout/layout.action';
