import { UsersState, UserModel } from '../../interface/user.interface';
import { INIT_USERS_STATE } from '../state/user-managament.state';
import * as fromAction from '../action';

export function reducer(state: UsersState = INIT_USERS_STATE, action: fromAction.UsersManagamentActions): UsersState {

    switch (action.type) {
        case fromAction.GET_USERS:
            return {
                ...state,
                loading: true
            }
        case fromAction.GET_USERS_SUCCESS:
            const users = action.payload;

            const entities = users.reduce(
                (entities: { [_id: string]: UserModel }, users: UserModel) => {
                    return {
                        ...entities,
                        [users._id]: users
                    }
            }, {
                ...state.entities
            })

            return {
                ...state,
                loading: false,
                entities
            }

        case fromAction.GET_USERS_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export const getUsersEntities = (state: UsersState) => state.entities;