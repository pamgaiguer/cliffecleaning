import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule, RouterModule],
  declarations: [
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
  ],
})
export class PagesModule {}
