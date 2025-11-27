import { Component, OnInit } from '@angular/core';
import { DBService } from '../services/db.service';
import { Patients } from './../models/Patients';

@Component({
  selector: 'app-all-dose-data',
  templateUrl: './all-dose-data.component.html',
  styleUrls: ['./all-dose-data.component.css']
})
export class AllDoseDataComponent {
  patients_data2: Patients[] = [];
  constructor(private db: DBService) {

    this.db.getPatient().subscribe((data) => {
      this.patients_data2 = data;
    })
  }
  public get_date(num:number): string  {
    return new Date(num).toLocaleString();
} 
public sort(patients_data2: Patients[]): Patients[] {
  return Patients.sort(patients_data2);
}
}
