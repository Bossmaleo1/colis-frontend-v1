import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService} from '../service/annonce.service';

@Component({
    selector: 'app-expedier',
    templateUrl: './expedier.component.html',
    styleUrls: ['./expedier.component.scss']
})

export class ExpedierComponent implements OnInit {
 aerop_dep=this.aerop_dep;
 aerop_arr=this.aerop_arr;
 date_vol=this.date_vol;

  constructor(   private router: Router,
    private listeservice: AnnonceService) {
 }

  ngOnInit() {}
  search_ann() {
    this.listeservice.search(this.aerop_dep, this.aerop_arr,this.date_vol)
    this.router.navigate(['/liste-annonce'])
    /*) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true*/
  }

}
