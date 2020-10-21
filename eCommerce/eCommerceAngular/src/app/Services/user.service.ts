import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User();
  private url = "src/Data/products.json";

  constructor() { 
    this.user.Name = "Damian";
    this.user.LastName = "Di Martino";
    this.user.UserId = 1;
  }
}