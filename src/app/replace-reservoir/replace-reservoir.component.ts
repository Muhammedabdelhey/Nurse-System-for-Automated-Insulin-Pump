import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patients } from '../models/Patients';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-replace-reservoir',
  templateUrl: './replace-reservoir.component.html',
  styleUrls: ['./replace-reservoir.component.css']
})
export class ReplaceReservoirComponent {
  patients: Patients[] = [];
  p: Patients[] = [];
  constructor(private db: DBService) {

    this.db.getPatient().subscribe((data) => {
      this.patients = data;
    })

  }
  onSubmit(cForm: NgForm) {
    var rv = 0;
    var p2: Patients[] = [];
    p2=this.getpatient(cForm.value.ID)
    p2 = this.sort(p2);
    if(p2.length==0){
      alert("This ID Not Found")
    }
    if (p2.length> 0) {
    rv = p2[0].ReservoirValue;}
    p2[0].ReservoirValue=cForm.value.ReservoirVolume;
    this.db.ReplaceReservoir(p2[0].Id,p2[0])
    alert("Replace Reservoir Done")
    p2.splice(0);
   
  }
  public sort(patients_data2: Patients[]): Patients[] {
    return Patients.sort(patients_data2);
  }


  public getpatient(id: number): Patients[] {
    for (let i = 0; i < this.patients.length; i++) {
      if (this.patients[i].id === id) {
        this.p.push(this.patients[i])
      }
    }
    return this.p;


  }
}
