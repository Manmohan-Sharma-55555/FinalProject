import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; // Import FormsModule if you're using ngModel
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { DataService } from './data.service'; // Import the DataService

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [BrowserModule, MatDialogModule, FormsModule], // Add FormsModule if needed
  providers: [DatePipe,DataService],// Provide the DataService here
  bootstrap: [AppComponent]
})
export class AppModule {}
