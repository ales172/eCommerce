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
  userLogin : boolean = false;
  constructor(private userService : UserService,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
  }

  login()
  {
    this.user.Email = this.loginForm.get("Email").value;
    this.user.Password = this.loginForm.get("Password").value;
    console.log(this.user.Password);
    if(this.user.Email)
    {
      if(this.user.Password==this.user.Password)
      {
        
        this.userLogin = true;
        
        this.router.navigate(["products"]);
      }
    }
  }
}
