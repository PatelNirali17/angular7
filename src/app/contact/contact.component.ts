import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phoneno = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);

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
    return this.phoneno.hasError('required') ? 'You must enter a phone no' :
            '';
  }
  getErrorMessage3() {
    return this.message.hasError('required') ? 'You must enter a message' :
            '';
  }

  constructor() { }

  ngOnInit() {
  }

}
