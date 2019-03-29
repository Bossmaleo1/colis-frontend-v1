import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
      this.router.navigate(['home']);
  }

  switchinscript() {
        this.router.navigate(['inscript']);
  }

}
