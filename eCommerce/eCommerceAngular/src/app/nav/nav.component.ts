import { Component, OnInit } from '@angular/core';
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
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user.Name = this.userService.user.Name;
    this.user.LastName = this.userService.user.LastName;
  }


  openDialog(){
    
  }
}