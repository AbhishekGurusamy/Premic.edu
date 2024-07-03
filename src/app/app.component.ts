import { Component, OnInit } from '@angular/core';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoggedIn = false
  userName:any

  constructor(private user: User){}

  ngOnInit(): void {
    if (localStorage.getItem('token') && localStorage.getItem('username')){
      this.userName = localStorage.getItem('username')
      this.isLoggedIn = true
    }
  }

  logout(){
    
  }

  }
