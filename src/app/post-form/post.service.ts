import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClint: HttpClient) { }

  postmethod(form) {
    return this.httpClint.post('https://reqres.in/api/register', form, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
