import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = 'https://jsonplaceholder.typicode.com'
  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url + '/users')
  }
}
