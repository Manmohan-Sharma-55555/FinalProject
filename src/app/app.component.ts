import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DataService } from './data.service';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  researchList: string[] = [];
  isDialogOpen: boolean = false;
  currentDate: string = ''; // Define a variable for the current date
  userInput: string = ''; // Define a variable for user input

  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
    private sharedService: SharedService
  ) {
    this.dataService.researchList$.subscribe((researchList) => {
      this.researchList = researchList;
    });

    // Retrieve the currentDate from the SharedService
    this.currentDate = this.sharedService.getCurrentDate();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterOpened().subscribe(() => {
      this.isDialogOpen = true;
    });
    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
    });
  }

  // This function updates the user input
  updateUserInput(input: string) {
    this.userInput = input;
  }
}
