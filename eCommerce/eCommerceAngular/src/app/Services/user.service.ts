import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUser: User = new User();
  usersList: Array<User> = new Array<User>();
  isUserActive: boolean = false;
  private url="http://localhost:3000/users";
  //private url="https://localhost:44348/api/users";

  constructor(private httpRequest:HttpClient ) { 
  }

  GetAllUsers() : Observable<User[]>
  {
    return this.httpRequest.get<User[]>(this.url);
  }

  SetActiveUser(user: User)
  {
    this.activeUser = user;
    this.isUserActive = true;
  }

  GetActiveUser(): User
  {
    return this.activeUser;
  }
}