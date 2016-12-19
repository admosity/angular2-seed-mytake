import { IAccount as IA } from './account/account.model';
import { ICommonState } from '../common/common.model';

// exports
export type IAccount = IA;

export interface IAppState {
    accounts: IAccount[];
    common: ICommonState;
}
