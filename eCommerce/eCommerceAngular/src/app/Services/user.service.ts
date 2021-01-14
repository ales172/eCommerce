import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User();
  usersList: Array<User> = new Array<User>();
  //private url="http://localhost:3000/users";
  private url="https://localhost:44348/api/users";

  constructor(private httpRequest:HttpClient ) { 
  }

  GetAllUsers() : Observable<User[]>
  {
    return this.httpRequest.get<User[]>(this.url);
  }

  GetUserByEmail(Email:string):User
  {
    this.GetAllUsers().subscribe((userResponse)=>{
      this.usersList = userResponse; 
      console.log("Service: "+this.usersList);
    })
    this.usersList.forEach(user => {
      if(user.Email === Email)
      {
        console.log("Service: "+user.Email);
        this.user=user;
      }
    });
    return this.user;
  }
}