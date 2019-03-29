import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  badgeshidden = false;
  badgetaille = 6;
  block_boite_de_dialogue: string;
    user_photo: string;

    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 50, 100, 200];


  constructor() { }

  ngOnInit() {
    this.user_photo = "http://localhost/colis_others/photo_de_profil/photo.jpg";
  }

    onCloseDialog() {
        this.block_boite_de_dialogue = 'none';
    }

    /*Pour afficher la boite de dialogue*/
    onDialogDisplayDialog() {
        this.block_boite_de_dialogue = 'block';
    }

}
