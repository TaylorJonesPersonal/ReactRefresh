import { ReduxStatus } from '../../constants';

export interface User {
    access_token: string;
    refresh_token: string;
}

export interface UserReduxState {
    status: ReduxStatus;
    error: Error;
    data: User;
}
