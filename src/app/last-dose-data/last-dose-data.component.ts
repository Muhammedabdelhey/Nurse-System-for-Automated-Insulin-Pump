import { Component } from '@angular/core';
import { Patients } from '../models/Patients';
import { DBService } from '../services/db.service';




@Component({
  selector: 'app-last-dose-data',
  templateUrl: './last-dose-data.component.html',
  styleUrls: ['./last-dose-data.component.css']
})
export class LastDoseDataComponent {
  patients_data: Patients[] = [];
  constructor(private db: DBService) {

    this.db.getPatient().subscribe((data) => {
      this.patients_data = data;
      this.remove_double()
    })
  }

  public get_date(num: number): string {
    return new Date(num).toLocaleString();
  }

  public sort(patients_data2: Patients[]): Patients[] {
    return Patients.sort(patients_data2);
  }

  public remove_double(): Patients[] {
    this.patients_data = this.sort(this.patients_data);
    var arr :number[]=[0];
    for (let i = 0; i < this.patients_data.length; i++) {
      if (arr.includes(this.patients_data[i].id)) {
        this.patients_data.splice(i, 1);
       
      }
      arr[i]=this.patients_data[i].id;
    }


    return this.patients_data ;
  }

}