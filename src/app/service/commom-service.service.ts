import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommomServiceService {
  // url = "http://3.111.59.100:8000"
  url = "http://127.0.0.1:8000";

  
  private token: string | undefined;

  userApi = this.url + '/auth/whoami';

  constructor(private http:HttpClient, private user: User) { }

  setToken(token: string) {
    this.token = token;
  }

  initialize(): Promise<any> {
    if (!this.token) {
      console.error('Unable to call whoami API.');
      return Promise.resolve();
    }

    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(this.userApi, { headers }).toPromise()
      .then((response:any) => {
        console.log('WhoAmI API Response:', response);
				this.user.uid = response['id']
				this.user.user_role = response['role']
				// this.user.email = response['email']
				this.user.first_name = response['username']
				// this.user.emp_code = response['emp_code']
				// this.user.id = response['id']
      })
      .catch(error => {
        console.error('WhoAmI API Error:', error);
      });
  }

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
