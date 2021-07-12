import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
@NgModule({
  imports: [CommonModule, FormsModule, NgbModule, RouterModule],
  declarations: [HomeComponent, ContactComponent, AboutusComponent, ServicesComponent],
})
export class PagesModule {}
