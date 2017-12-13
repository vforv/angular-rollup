import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as fromAction from '../action';
import { UserService } from '../../service/user.service';

@Injectable()
export class UsersEffect {
    constructor(private actions$: Actions, private _userService: UserService) {

    }

    @Effect()
    getUsers$: Observable<Action> = this.actions$
        .ofType(fromAction.GET_USERS)
        .switchMap(() => {
            return this._userService.getUsers()
        })
        .map((users: any) => {
            return new fromAction
                .GetUserSuccess(users.data.users)
        })
}