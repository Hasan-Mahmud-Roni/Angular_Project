import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatecityComponent } from './components/createcity/createcity.component';
import { UpdatecityComponent } from './components/updatecity/updatecity.component';
import { DeletecityComponent } from './components/deletecity/deletecity.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatecityComponent,
    UpdatecityComponent,
    DeletecityComponent
  ],
 imports: [
    BrowserModule,
    AppRoutingModule,AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
