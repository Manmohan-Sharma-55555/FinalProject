import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private researchName: string = '';
  currentDate: string = '';
  userInput: string = ''; // Add a variable for user input

  setResearchName(value: string) {
    this.researchName = value;
  }

  getResearchName() {
    return this.researchName;
  }

  setCurrentDate(date: string) {
    this.currentDate = date;
  }

  getCurrentDate(): string {
    return this.currentDate;
  }

  // Set and retrieve user input
  setUserInput(input: string) {
    this.userInput = input;
  }

  getUserInput(): string {
    return this.userInput;
  }
}
