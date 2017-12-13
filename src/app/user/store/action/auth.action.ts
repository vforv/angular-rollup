import { Action } from '@ngrx/store';
import { UserModel } from '../../interface/user.interface';

export const LOGIN_USER = '[User] Login User';

export const LOGIN_USER_FAIL = '[User] Login User Fail';

export const LOGIN_USER_SUCCESS = '[User] Login User Success';


export class LoginUser implements Action {
    readonly type = LOGIN_USER;
}

export class LoginUserFail implements Action {
    readonly type = LOGIN_USER_FAIL;

    constructor(public payload:any) {

    }
}

export class LoginUserSuccess implements Action {
    readonly type = LOGIN_USER_SUCCESS;

    constructor(public payload:{ loggedin: boolean, entity: UserModel }) {
        
    }
}


export type AuthAction = LoginUser | LoginUserFail | LoginUserSuccess;