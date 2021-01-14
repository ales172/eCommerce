import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { AddProductComponent } from '../add-product/add-product.component';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: User = new User();
  constructor(private userService:UserService,
              private ruta: ActivatedRoute) { }
  
  isUserActive: boolean = false;
  ngOnInit(): void {
  }


  GetUser(){
    this.user = this.userService.GetActiveUser() as User;
    this.isUserActive = this.userService.isUserActive;
  }
}