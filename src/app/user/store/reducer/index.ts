import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromUsers from './user-managament.reducer';
import { AuthState, UsersState, UserModel } from '../../interface/user.interface';
import { getLoggedIn, getUser } from './auth.reducer';

export interface UserState {
    auth: AuthState,
    users: UsersState
}

export const reducers: ActionReducerMap<UserState> = {
    auth: fromAuth.reducer,
    users: fromUsers.reducer
}

export const getUserState = createFeatureSelector<UserState>('user');

//Auth state
export const getAuthState = createSelector(
    getUserState,
    (state: UserState) => state.auth
);

export const getIsloggedIn = createSelector(
    getAuthState,
    getLoggedIn
)

export const getLoggedUser = createSelector(
    getAuthState,
    getUser
)


//User state
export const getUsersState = createSelector(
    getUserState,
    (state: UserState) => state.users
);


export const getUsersEntities = createSelector(
    getUsersState,
    fromUsers.getUsersEntities
)

export const getAllUsers = createSelector(
    getUsersEntities,
    (entities) => {
        return Object
            .keys(entities)
            .map(id => entities[id])
    }
)