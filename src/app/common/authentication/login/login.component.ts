import { Component, OnInit, VERSION } from '@angular/core';
import {DeviceUUID} from "device-uuid"
import { EmailValidator, FormControl,FormGroup, Validators } from '@angular/forms';
import {CommomServiceService} from 'src/app/service/commom-service.service';
import {ToastService} from 'src/app/service/toast.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uuid = new DeviceUUID().get();
  
  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null, Validators.required)

  })

  constructor(private auth:CommomServiceService, private toast:ToastService, private route:Router){
  }

  ngOnInit(): void {
    console.log(this.uuid)
  }

  login(){
    const payload = {
      "username":this.loginForm.value['email'],
      "password":this.loginForm.value['password'],
      "device_id":this.uuid
    }

    this.auth.loginApi(payload).subscribe((response:any)=>{
      console.log(response.details.token);
      
      if(response.details.token){
        this.toast.success("Login Successful")
        localStorage.setItem("token",response.details.token)
        localStorage.setItem("username",response.details.username)
        this.route.navigate(["videos"])

      }
    
    },(error:any)=>{
      this.toast.error(error.error.detail)
      
    })
    
  }



}
