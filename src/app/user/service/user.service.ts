import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {


  constructor(private http: Http) {
  }

  loginUser(): Observable<Response> | any {
    return Observable.of({
      loggedin: true,
      entity: {
        _id: "asdasasdasdas",
        firstName: "Vladimir",
        lastName: "Djukic",
        email: "vladimir@amerbank.com"
      }
    });
  }

  getUsers(): Observable<Response> | any {
    return Observable.of({
      data: {
        users: [
          {
            _id: "asdasasdasdas",
            firstName: "Vladimir",
            lastName: "Djukic",
            email: "vladimir@amerbank.com"
          }
        ]
      }
    });
  }
}