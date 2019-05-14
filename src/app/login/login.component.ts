import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authetification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email =this.email
  password =this.password
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    //public user=[];
  }

  checkLogin() {
    this.loginservice.authenticate(this.email, this.password)
    //this.router.navigate([''])
    /*) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true*/
  }

}

/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authetification.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = this.email;
  password = this.password;
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService,private _userservice:AuthenticationService) { }

  ngOnInit() {
    //public user=[];
  }
  //.loginservice.authenticate
  checkLogin() {
    this.loginservice.authenticate(this.email, this.password)
    /*.subscribe(
      data => {
        console.log('ok');
          this.router.navigate(['']);
      },
      error => {
        console.log('erreur');
      })*/
      
 // }

//}
/*.pipe(first())
            .subscribe(
                data => {
                  console.log('ok');
                    this.router.navigate(['']);
                },
                error => {
                  console.log('erreur');
                });*/
   /*if (this.loginservice.authenticate(this.email, this.password)
            .pipe()
            .subscribe(
        data => {
            this.router.navigate(['']);
        },
        error => {
          console.log('erreur');
        })
    ) {
       console.log('erreur');
      //this.router.navigate([''])
      //this.invalidLogin = false
    } else
      //this.invalidLogin = true
      console.log('valider');
  }*/
  

//}