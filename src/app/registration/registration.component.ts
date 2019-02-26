import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(8)]);
  phoneno = new FormControl('', [Validators.required]);
  course = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a username' :
            '';
  }
  getErrorMessage1() {
    return this.email.hasError('required') ? 'You must enter a email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessage2() {
    return this.pass.hasError('required') ? 'You must enter a password' :
        this.pass.hasError('minLength') ? '' :
            '';
  }
  getErrorMessage3() {
    return this.phoneno.hasError('required') ? 'You must enter a phone no' :
            '';
  }
  getErrorMessage4() {
    return this.course.hasError('required') ? 'You must enter a course' :
            '';
  }
  getErrorMessage5() {
    return this.city.hasError('required') ? 'You must enter a city' :
            '';
  }
  hide = true;
  courses: Course[] = [
    {value: 'web devlopment', viewValue: 'Web Devlopment'},
    {value: 'software devlopment', viewValue: 'Software Devlopment'},
    {value: 'software testing', viewValue: 'Software Testing'},
    {value: 'databse', viewValue: 'Database'},
    {value: 'android', viewValue: 'Android'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
