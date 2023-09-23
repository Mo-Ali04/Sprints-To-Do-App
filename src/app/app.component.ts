import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'To-Do-App';
  // users:any;
  // usersList=[{"id":1,"name":"Zucker Ping","avatar":"https://robohash.org/zucker-ping.png","username":"zucker"},
  // {"id":2,"name":"Felon Must","avatar":"https://robohash.org/felon-must.png","username":"felon"},
  // {"id":3,"name":"Robon Wood","avatar":"https://robohash.org/robon-wood.png","username":"robon"}];

  constructor(private service:UserService,private http : HttpClient) {}

  ngOnInit() {
    // this.service.getUsers()
    //   .subscribe(response => {
    //     this.users = response;
    //     this.usersList = this.users;
    //   });
  }
}
