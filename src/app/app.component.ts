import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoggedIn = false
  userName:any

  constructor(){}

  ngOnInit(): void {
    if (localStorage.getItem('token') && localStorage.getItem('username')){
      this.userName = localStorage.getItem('username')
      this.isLoggedIn = true
    }
  }

  }
