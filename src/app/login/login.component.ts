import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(8)]);

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
  hide = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(usnm: string){
    this.router.navigate(['success-login',usnm])
  }
  onclick(){
    this.router.navigate(['forgot'])
  }
}
