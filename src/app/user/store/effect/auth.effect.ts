import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as userActions from '../action';
import { UserService } from '../../service/user.service';
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { AuthState, UserModel } from '../../interface/user.interface';

@Injectable()
export class AuthEffect {

    constructor(private actions$: Actions, private _userService: UserService) {
    }


    @Effect()
    userLogin$: Observable<Action> = this.actions$
        .ofType(userActions.LOGIN_USER)
        .pipe(switchMap(() => {
            return this._userService.loginUser().pipe(
                map(
                    (user: AuthState) =>
                        new userActions.LoginUserSuccess({loggedin: true, entity: user.entity}),
                        catchError(error => of(new userActions.LoginUserFail(error)))
                )
            )
        })

        )


}