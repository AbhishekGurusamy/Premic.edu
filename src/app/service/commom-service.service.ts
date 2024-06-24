import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommomServiceService {

  url = "http://3.111.59.100:8000"

  constructor(private http:HttpClient) { }

  loginApi(payload:any){
    let api_url = this.url + "/auth/login"
    return this.http.post(api_url,payload)
  }

  registerApi(payload:any){
    let api_url = this.url + "/auth/register"
    return this.http.post(api_url,payload)
  }

  userList(){
    let api_url = this.url + "/auth/userlist"
    return this.http.get(api_url)
  }

  uploadvideo(payload:any){
    let apiURl = this.url+ "/videos/"
    return this.http.post(apiURl,payload)
  }

  getuploadedvideo(payload:any){
    let apiURl = this.url+ "/videos/"
    return this.http.get(apiURl,{params: payload} )
  }

  deletevideo(payload:any){
    let apiURl = this.url+ "/videos/"
    return this.http.delete(apiURl, {params: payload})
  }
}
