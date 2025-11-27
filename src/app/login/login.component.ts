import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DBService } from '../services/db.service';
import { Nurses } from './../models/NurseData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Nurse_Data: Nurses[] = [];

  constructor(private router: Router, private db: DBService) {
    
    this.db.getNurseData().subscribe((data) => {
      this.Nurse_Data = data;
    })
  }

  ngOnInit(): void {
  }
  onSubmit(cForm: NgForm) {


    if (this.Nurse_Data.some((i) => i.ID == cForm.value.ID)) {
      if (this.Nurse_Data.some(n => n.Password == cForm.value.password && n.ID == cForm.value.ID)) {
        this.router.navigate(['/home']);
      }
      else {
        alert("password not correct")
      }
    }
    else {
      alert("Id not found");
    }
  }
}


