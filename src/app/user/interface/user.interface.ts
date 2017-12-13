export interface UserModel {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}


export interface AuthState {
    loggedin: boolean;
    loading: boolean;
    entity: UserModel;
}


export interface UsersState {
    loading: boolean;
    entities: {[ _id: string ] : UserModel }
}