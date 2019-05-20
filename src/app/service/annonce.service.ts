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
export class AnnonceService {

 // private constance
  //private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;
  private annonce={}
  private annoncesObservable : Observable<any[]> ; 
        constructor(private http: HttpClient, private router: Router) {
      //  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
       // this.currentUser = this.currentUserSubject.asObservable();
       
    }

   /* public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }*/

  search(dep: string, arr: string, dat:Date) {
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
            const url=('http://localhost/colis/ColisApi/public/api/Rechercher?lieux_arrivee=').concat(arr).concat('&lieux_depart=').concat(dep).concat('&date_voyage=').concat(dep);
           this.http
            .get(url)
            .subscribe(
                (annonce:any) => {
                   console.log(annonce);
                   this.annonce=annonce;
                  //  localStorage.setItem('currentUser', JSON.stringify(this.users));
                  //  this.currentUserSubject.next;
                  
                  
                 //  sessionStorage.setItem('email', email)
                   //this.router.navigate(['']);
                   console.log(annonce);
                    
                },
                (error) => {
                  console.log('une erreur vient de se produire');
                });
                
            
            //);
    }

 /* isUserLoggedIn() {
   let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }*/
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
   /* logout() {
      sessionStorage.removeItem('email');
      localStorage.removeItem('currentUser');
      //this.router.navigate(['']);
    }*/
}