import { MoviedetailsFormComponent } from './moviedetails-form/moviedetails-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { PartnerRegisterComponent } from './register/partner-register/partner-register.component';
import { DistributionRegisterFormComponent } from './distribution-registerform/distribution-registerform.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { PartnerLoginComponent } from './login/partner-login/partner-login.component';
import { TheatreRegistrationComponent } from './theatre-registration/theatre-registration.component';
import { ContactComponent } from './contact/contact.component';
import { MovieScreeningComponent } from './movie-screening/movie-screening.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'home/:city', component: HomePageComponent },
  { path: 'register-user', component: UserRegisterComponent },
  { path: 'login-user', component: UserLoginComponent },
  { path: 'register-partner', component: PartnerRegisterComponent },
  { path: 'moviedetail', component: MoviedetailsFormComponent },
  { path: 'login-partner', component: PartnerLoginComponent },
  { path: 'distributor', component: DistributionRegisterFormComponent },
  { path: 'screening/:theatreName', component: MovieScreeningComponent },
  { path: 'theatre', component: TheatreRegistrationComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule,BrowserModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  LandingPageComponent,
  UserRegisterComponent,
  PartnerLoginComponent,
  UserLoginComponent,
  PartnerRegisterComponent,
  HomePageComponent,
  TheatreRegistrationComponent,
  DistributionRegisterFormComponent,
  MovieScreeningComponent
];
