import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StaffComponent } from './pages/staff/staff.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'components',                           component: ComponentsComponent },
    { path: 'profile',                              component: ProfileComponent },
    { path: 'signup',                               component: SignupComponent },
    { path: 'nucleoicons',                          component: NucleoiconsComponent },
    { path: 'home',                                 component: HomeComponent },
    { path: 'about',                                component: AboutComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'staff',          component: StaffComponent },
    { path: 'clients',          component: ClientsComponent },
    { path: 'testimonials',          component: TestimonialsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
