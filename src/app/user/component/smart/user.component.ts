import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { UserModel } from '../../interface/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  public isloggedin$: Observable<boolean>
  
  public user$: Observable<UserModel>

  public users$: Observable<any>

  constructor(private store: Store<fromStore.UserState>) {

    this.isloggedin$ = this.store.select(fromStore.getIsloggedIn);

    this.user$ = this.store.select(fromStore.getLoggedUser);

    this.users$ = this.store.select(fromStore.getAllUsers);
  }

  ngOnInit() {
      this.store.dispatch(new fromStore.LoginUser);

      this.store.dispatch(new fromStore.GetUser);
  }

}
