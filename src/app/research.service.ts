import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {
  private researchName: string = '';

  setResearchName(value: string) {
    this.researchName = value;
  }

  getResearchName() {
    return this.researchName;
  }
}