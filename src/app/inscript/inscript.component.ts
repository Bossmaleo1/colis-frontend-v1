import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatStepper} from "@angular/material";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-inscript',
  templateUrl: './inscript.component.html',
  styleUrls: ['./inscript.component.scss']
})
export class InscriptComponent implements OnInit {

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    afficher_code = false;
    firstform1: any;
    nom: any;
    prenom: any;
    datedenaissance: any;
    sexe: any;
    password: any;

    disparaitreprogressbar = 'none';
    disparaitreallblock = 'block';


    constructor(private _formBuilder: FormBuilder
      , public snackBar: MatSnackBar
      , private _location: Location
     , private  router: Router) { }

  ngOnInit () {
      this.initForm();
  }

  initForm() {
        this.firstFormGroup = this._formBuilder.group({
            email: ['',  [Validators.required, Validators.email]],
            codevalidation: ['', Validators.required],
            phonenumber: ['', Validators.required]
        });

        this.secondFormGroup = this._formBuilder.group({
            Nom: ['', Validators.required],
            Prenom: ['', Validators.required],
            date: ['', Validators.required]
        });

        this.thirdFormGroup = this._formBuilder.group({
            sexe: ['', Validators.required],
            password1: ['', Validators.required],
            password2: ['', Validators.required]
        });
  }

    onSubmitfirstForm(stepper: MatStepper) {
        const formValue = this.firstFormGroup.value;
        stepper.next();
    }


    onSubmitSecondForm(stepper: MatStepper) {
        const formValue = this.secondFormGroup.value;
        stepper.next();
    }

    onSubmitthirdForm(stepper: MatStepper) {
        const formValue = this.thirdFormGroup.value;
        this.sexe = formValue['sexe'];
        this.password = formValue['password1'];
        const password2 = formValue['password2'];
        this.router.navigate(['welcome']);
    }


    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    OnBack() {
        this._location.back();
    }

}
