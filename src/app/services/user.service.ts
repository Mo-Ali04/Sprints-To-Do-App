import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:4000/';
  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.url+"users");
  }

}
