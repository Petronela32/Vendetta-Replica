import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/users.interface';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {
    // getUsers(): Observable<IUser[]> {
    //     return this.http.get<IUser[]>('http://localhost:3000/users');
    //   }
  }
}
