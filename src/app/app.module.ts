import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AllproductsComponent } from './pages/allproducts/allproducts.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AddDocComponent } from './pages/add-doc/add-doc.component';
import { AllDocsComponent } from './pages/all-docs/all-docs.component';
import { SingleDocComponent } from './pages/single-doc/single-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AllproductsComponent,
    NavComponent,
    FooterComponent,
    AddDocComponent,
    AllDocsComponent,
    SingleDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
