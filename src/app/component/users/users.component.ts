import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
@Output()
  userEmit = new EventEmitter<IUser>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  catchUserEmit($event: IUser): void {
    console.log('users', $event)
    this.userEmit.emit($event)
  }
}
