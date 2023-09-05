import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service'; // Import the SharedService

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  researchName: string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    private dataService: DataService,
    private datePipe: DatePipe,
    private sharedService: SharedService // Inject the SharedService
  ) {}

  ngOnInit(): void {
    // this.updateCurrentDate(); // Initialize the current date
  }

  closeDialog() {
    this.dialogRef.close();
  }

  continue() {
    if (this.researchName.trim() !== '') {
      const formattedDate = this.datePipe.transform(new Date(), 'medium'); // Format the date
  
      if (formattedDate !== null) {
        const researchWithDate = `${formattedDate}: ${this.researchName}`; // Combine date and research
        this.dataService.addResearchName(researchWithDate);
        this.sharedService.setCurrentDate(formattedDate); // Update currentDate in the SharedService
        // Update the user input in the parent component
        this.sharedService.setUserInput(this.researchName);
        this.dialogRef.close();
      } else {
        // Handle the case where date formatting failed
        console.error('Date formatting failed.');
      }
    }
  }
  
  
}
