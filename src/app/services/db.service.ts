import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Nurses } from './../models/NurseData';
import { Patients } from '../models/Patients';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore:Firestore) { 

  }

  getNurseData()
  {
    let $NurseRef=collection(this.firestore,"Nurse");
    
    return collectionData($NurseRef,{idField:"id"}) as Observable<Nurses[]>;
  }

  getPatient()
  {
    let $patientRef=collection(this.firestore,"Patients");
    
    return collectionData($patientRef,{idField:"Id"}) as Observable<Patients[]>;
  }

  ReplaceReservoir(ID:string,patients:Patients)
  {
    let $ReservoirRef=doc(this.firestore,"Patients/"+ID);
    return setDoc($ReservoirRef,patients);
  }

}
