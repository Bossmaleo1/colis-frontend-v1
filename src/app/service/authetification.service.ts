import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /*  private _url:string="../../assets/data/user.json";*/
    constructor(private http: HttpClient) {  }
 /* getUser():Observable<any[]>{ 
    return  this.http.get<any[]>(this._url);*/
  //}

  authenticate(username, password) {
  /*  this.http
    .get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        //this. = response;
        //this.user();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );*/

    if (username === "javainuse" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}