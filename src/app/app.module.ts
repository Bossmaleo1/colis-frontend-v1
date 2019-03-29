import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {PublicCommentsServices} from './Services/public.comments.services';
import {PrivateUseronlineServices} from './Services/private.useronline.services';
import {PrivateRecentconvertServices} from './Services/private.recentconvert.services';
import {ConstanceService} from './Services/Constance.service';
import {AuthService} from './Services/auth.service';
import {HomeDesignService} from './Services/home.design.service';
import {AuthGuardService} from './Services/auth.guard.service';
import {PublicConvertServices} from './Services/public.convert.services';
import {Help1Services} from './Services/help1.services';
import {MessagepublicService} from './Services/messagepublic.service';
import {ProblematiqueItemService} from './Services/problematique.item.service';
import {AddProfilPictureService} from './Services/add.profil.picture.service';
import {HttpClientModule} from '@angular/common/http';

import {
    LyThemeModule,
    LY_THEME
} from '@alyle/ui';

import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';
/** Import theme */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatListModule,
    MatRippleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatProgressBarModule, MatPaginatorModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptComponent } from './inscript/inscript.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AddProfilPictureComponent } from './add-profil-picture/add-profil-picture.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
    {path: 'connexion', component: ConnexionComponent},
    {path: 'inscript', component: InscriptComponent},
    {path: 'home', component: HomeComponent},
    {path: '', component: ConnexionComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptComponent,
    NotFoundComponent,
    HomeComponent,
    AddProfilPictureComponent,
    WelcomeComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDividerModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatTabsModule,
      MatBadgeModule,
      MatCheckboxModule,
      MatSlideToggleModule,
      MatListModule,
      MatRippleModule,
      MatSnackBarModule,
      FormsModule,
      MatPaginatorModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      MatProgressSpinnerModule,
      MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule,MatProgressBarModule,
      ReactiveFormsModule,
      LyThemeModule.setTheme('minima-dark'),
      LyResizingCroppingImageModule,
      LyButtonModule,
      LyIconModule,
      LyTypographyModule,
      HttpClientModule,
      FlexLayoutModule
  ],
  providers: [
      AuthService,
      HomeDesignService,
      PublicConvertServices,
      AuthGuardService,
      Help1Services,
      PublicCommentsServices,
      PrivateUseronlineServices,
      PrivateRecentconvertServices,
      ConstanceService,
      MessagepublicService,
      ProblematiqueItemService,
      AddProfilPictureService,
      { provide: LY_THEME, useClass: MinimaLight, multi: true },
      { provide: LY_THEME, useClass: MinimaDark, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
