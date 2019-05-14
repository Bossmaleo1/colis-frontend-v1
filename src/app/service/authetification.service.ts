import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';
import { Router } from '@angular/router';
//import { url } from 'inspector';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 // private constance
  //private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;
  private users={}
  private usersObservable : Observable<any[]> ; 
        constructor(private http: HttpClient, private router: Router) {
      //  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
       // this.currentUser = this.currentUserSubject.asObservable();
       
    }

   /* public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }*/

  authenticate(email: string, password: string) {
       // return this.http.post<any>(`http://www.wazzaby.com/colis/ColisApi/public/api/connexion`, { email, password })
        /*.subscribe(res => {
	        console.log(res)
	    });*/
           /* .pipe(map(user => {
               
                if (user && user.token) {
                    
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                console.log(user)
                return user;
            }));*/
            const url=('http://localhost/Colis/ColisApi/public/api/connexion?email=').concat(email).concat('&password=').concat(password);
           this.http
            .get(url)
            .subscribe(
                (user:any) => {
                   console.log(user);
                   this.users=user;
                    localStorage.setItem('currentUser', JSON.stringify(this.users));
                  //  this.currentUserSubject.next;
                  
                  
                   sessionStorage.setItem('email', email)
                   //this.router.navigate(['']);
                   console.log('reouted');
                    
                },
                (error) => {
                  console.log('une erreur vient de se produire');
                });
                
            
            //);
    }

  isUserLoggedIn() {
   let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }
 /* isUserLoggedChange(){
    let nom= sessionStorage.getItem('nom')
  }*/

   /* logout() {
        // suppression local storage du login utilisateur
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }*/
   /* logOut() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      sessionStorage.removeItem('email')
    }*/
    logout() {
      sessionStorage.removeItem('email');
      localStorage.removeItem('currentUser');
      //this.router.navigate(['']);
    }
}