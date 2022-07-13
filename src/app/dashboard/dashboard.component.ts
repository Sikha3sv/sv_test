import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = new FormControl('');
  address = new FormControl('');
  dob = new FormControl('');
  role= new FormControl('');
  phone = new FormControl('');
  gender = new FormControl('');

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  submit()
  {
    if(this.name.value == "")
    {
      alert("plase enter name");
    }
    else if(this.address.value == "")
    {
      alert("please enter address")
    }
    else if(this.dob.value == "")
    {
      alert("please enter DOB");
    }
    // else if(this.gender.value == "")
    // {
    //   alert("please choose gender");
    // }
    else if(this.role.value == "")
    {
      alert("please choose DOB");
    }
    else if(this.phone.value == "")
    {
      alert("please enter phone");
    }
    else
    {
    console.log(JSON.stringify(this.name.value));
    localStorage.setItem('name',JSON.stringify(this.name.value));
    localStorage.setItem('address',JSON.stringify(this.address.value));
    localStorage.setItem('dob',JSON.stringify(this.dob.value));
    localStorage.setItem('role',JSON.stringify(this.role.value));
    localStorage.setItem('phone',JSON.stringify(this.phone.value));
    localStorage.setItem('gender',JSON.stringify(this.gender.value));
    this.router.navigate(['/submit']);
  }
}

}
