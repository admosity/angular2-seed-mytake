import * as layout from '../common/layout/layout.reducer';

import { ActionReducer, combineReducers } from '@ngrx/store';

import { IAppState } from './feature.model';
import { ILayout } from '../common/common.model';
import { accounts } from './account/account.reducer';
import { reducer as common } from '../common/common.reducer';
import { compose } from '@ngrx/core/compose';
import { createSelector } from 'reselect';

const reducers = {
    accounts,
    common
};

const devReducers: ActionReducer<IAppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return devReducers(state, action);
}

export const getLayoutState = (state: IAppState) => {
    return state.common.layout;
};
export const getShowSidenav = createSelector(getLayoutState, layout.getShowSidenav);

export { OpenSidenavAction, CloseSidenavAction } from '../common/common.reducer';

