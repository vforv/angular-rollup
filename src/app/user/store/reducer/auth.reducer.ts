import { StoreModule, Action } from '@ngrx/store';
import { INIT_AUTH_STATE } from '../state/auth.state';
import * as userActions from '../action/auth.action';
import { AuthState, UserModel } from '../../interface/user.interface';

export function reducer(state: AuthState = INIT_AUTH_STATE, action: userActions.AuthAction): AuthState {

    switch (action.type) {

        case userActions.LOGIN_USER:

            return {
                ...state,
                loading: true
            }
        case userActions.LOGIN_USER_SUCCESS:

            const user = action.payload;
            
            return {
                ...state,
                loading: false,
                entity: user.entity,
                loggedin: user.loggedin
            }

        case userActions.LOGIN_USER_FAIL:

            return {
                ...state,
                loading: false
            }

        default:
            return state;

    }

}


export const getLoggedIn = (state: AuthState) => state.loggedin;

export const getUser = (state: AuthState) => state.entity;