import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { SlideComponent } from './site/slide/slide.component';
import { FooterComponent } from './site/footer/footer.component';
import { LoginComponent } from './site/login/login.component';
import { RegisterComponent } from './site/register/register.component';
import { DeveloperComponent } from './site/developer/developer.component';
import { StepComponent } from './site/step/step.component';
import { EquipComponent } from './site/equip/equip.component';
import { SiteComponent } from './site/site.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DeveloperComponent,
    StepComponent,
    EquipComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
