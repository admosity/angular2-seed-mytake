import * as immutable from 'immutable';

import { IAccount } from './account.model';

export const ACTIONS =  {
    add_account: "add_account",
    edit_account: "edit_account"
};

export const accounts = (state: IAccount[] = [], action:any) => {
    switch (action.type) {
        case ACTIONS.add_account: 
            return handleAddAccount(state, action.payload);
        default:
            return state;
    }
};

function handleAddAccount(state: IAccount[], payload:any):IAccount[]{
    console.log("in handle action here ", payload);
    return immutable.List(state).push(payload).toArray();
}   