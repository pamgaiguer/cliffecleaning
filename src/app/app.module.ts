import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { DotdotdotPipe } from './pipes/dotdotdot.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// internationalization
// registerLocaleData(localePt);
// registerLocaleData(localeEn);
@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, DotdotdotPipe],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    PagesModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [DotdotdotPipe],
  providers: [DotdotdotPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
