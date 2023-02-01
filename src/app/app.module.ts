import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { successAlert } from './SuccessAlert/successAlert.component';
import { warningAlert } from './WarningAlert/warningAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    successAlert,
    warningAlert
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
