import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm : FormGroup;
  user:User=new User();
  usersList: Array<User> = new Array<User>();
  userLogin : boolean = false;
  constructor(private userService : UserService,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe((data:User[]) => {
      this.usersList = data;
    })
    this.loginForm = this.formBuilder.group({
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
  }

  login()
  {
    this.user.Email = this.loginForm.get("Email").value;
    this.user.Password = this.loginForm.get("Password").value;
    let loginUser = this.GetUserByEmail(this.user.Email) as User;
    if(loginUser.Email)
    {
      if(this.user.Password==loginUser.Password)
      {        
        this.userLogin = true;
        this.userService.SetActiveUser(loginUser);
        this.router.navigate(["products"]);
      }
    }
  }

  GetUserByEmail(Email:string):User
  {    
    let userSelected: User;
    this.usersList.forEach(user => {
      if(user.Email == Email)
      {
        userSelected = user as User;
      }
    });
    return userSelected;
  }
}
