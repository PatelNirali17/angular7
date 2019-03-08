import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postDataForm:FormGroup;
  constructor(private fb:FormBuilder,
    private postservices: PostService) { }

  ngOnInit() {
    this.postDataForm = this.fb.group({
      email:[''],
      password:['']
    })
  }
  submitPostData() {
    let formData : Data = {} as Data;
    formData = this.postDataForm.value;
    this.postservices.postmethod(formData).subscribe(res=> {
      console.log(res);
      
    })
   }
}
