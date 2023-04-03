import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { SongsComponent } from './components/songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ButtonComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
