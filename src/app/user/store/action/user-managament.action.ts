import { Action } from '@ngrx/store';
import { UserModel } from '../../interface/user.interface';

export const GET_USERS = "[Users] Get Users";

export const GET_USERS_FAIL = "[Users] Get Users Fail";

export const GET_USERS_SUCCESS = "[Users] Get Users Success";


export class GetUser implements Action {
    readonly type = GET_USERS;
}

export class GetUserSuccess implements Action {
    readonly type = GET_USERS_SUCCESS;

    constructor(public payload: UserModel[]) {

    }
}

export class GetUserFail implements Action {
    readonly type = GET_USERS_FAIL;

    constructor(public payload: any) {

    }
}

export type UsersManagamentActions = GetUser | GetUserSuccess | GetUserFail;