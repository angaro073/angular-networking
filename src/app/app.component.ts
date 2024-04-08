import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <h1>User List</h1>
      @for (user of users; track $index) {
        <p>{{user.name}}</p>
      }
      @empty {
        <p>Users not found!</p>
      }
    </div>
  `,
})
export class AppComponent implements OnInit {
  readonly apiURL: string = "https://jsonplaceholder.typicode.com/users";
  users: User[] = [];

  constructor(protected httpClient: HttpClient) {}

  getUsers() {
    this.httpClient.get<User[]>(this.apiURL).subscribe(res => {this.users = res;});
  }
  ngOnInit() {
    this.getUsers();
  }
}
