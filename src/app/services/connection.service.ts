import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  addAppointment(userData: IUser): Observable<IUser[]> {
    return this.http.post<IUser[]>('http://localhost:3000/users', userData);
  }
}
