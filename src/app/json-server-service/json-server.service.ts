import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { UserEvent } from "./user-event";

@Injectable()
export class JsonServerService {


  private apiUrl = 'http://localhost:5000/users/';

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  }

}
