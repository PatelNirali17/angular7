import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  usnm:string
  username = new FormControl('', [Validators.required]);
   getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a username' :
            '';
  }
  constructor( private router:Router) { }
  
  ngOnInit() {
  }
change(usnm:string){
  this.router.navigate(['change-pass',usnm])
}
}
