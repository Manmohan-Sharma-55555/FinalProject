import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private researchListSubject = new BehaviorSubject<string[]>([]);
  researchList$ = this.researchListSubject.asObservable();

  addResearchName(researchName: string) {
    const currentList = this.researchListSubject.value;
    currentList.push(researchName);
    this.researchListSubject.next(currentList);
  }
}
