import * as layout from './layout.action';

import { ILayout } from './layout.model';

const initialState: ILayout = {
    showSidenav: false
};

export const layoutReducer = (state = initialState, action: layout.Actions): ILayout => {
    switch (action.type) {
        case layout.ActionTypes.CLOSE_SIDENAV:
            return {
                showSidenav: false
            };
        case layout.ActionTypes.OPEN_SIDENAV:
            return {
                showSidenav: true
            };
        default:
            return state;
    }
};

export const getShowSidenav = (state: ILayout) => {
    return state.showSidenav;
};

