import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { TransportComponent } from './transport/transport.component';
import {ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { ExpedierComponent } from './expedier/expedier.component';
import {DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';



const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent,canActivate:[AuthGaurdService]  },
    { path: 'register',           component: SignupComponent  },
    { path: 'landing',          component: LandingComponent,canActivate:[AuthGaurdService]  },
    { path: 'login',          component: LoginComponent  },
    { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]  },
	{ path: 'transport', component: TransportComponent  },
    { path: 'liste-annonce', component: ListeAnnonceComponent  },
    { path: 'detail-annonce', component: DetailAnnonceComponent  },
    { path: 'expedier', component:ExpedierComponent  },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
	
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

