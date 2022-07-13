import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  name: any;
  address: any;
  dob:any;
  role:any;
  gender:any;
  phone:any;


  constructor() { }

  ngOnInit(): void {    
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name);
    this.address = localStorage.getItem('address');
    this.address = JSON.parse(this.address);    
    this.dob = localStorage.getItem('dob');
    this.dob = JSON.parse(this.dob);
    this.role = localStorage.getItem('role');
    this.role = JSON.parse(this.role);
    this.gender = localStorage.getItem('gender');
    if(JSON.parse(this.gender))
    this.gender = "Male";
    else
    this.gender = "Female";
    this.phone = localStorage.getItem('phone');
    this.phone = JSON.parse(this.phone);
    
  }

}
