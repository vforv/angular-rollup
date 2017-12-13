import { UserModel, AuthState } from '../../interface/user.interface';


export const INIT_USER_DATA: UserModel = {
    _id: null,
    firstName: null,
    lastName: null,
    email: null
}


export const INIT_AUTH_STATE: AuthState = {
    loggedin: false,
    loading: false,
    entity: INIT_USER_DATA
}