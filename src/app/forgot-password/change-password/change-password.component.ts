import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  pass1 = new FormControl('', [Validators.required, Validators.minLength(8)]);
  pass2 = new FormControl('', [Validators.required, Validators.minLength(6)]);
  getErrorMessage1() {
    return this.pass1.hasError('required') ? 'You must enter a password' :
        this.pass1.hasError('minLength') ? '' :
            '';
  }
  getErrorMessage2() {
    return this.pass2.hasError('required') ? 'You must enter a password' :
        this.pass2.hasError('minLength') ? '' :
            '';
  }
  hide = true;
  show = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  changepass(){
    this.router.navigate(['login'])
  }

}
