import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IUser } from '../interface/users.interface';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isDone: boolean = false;

  userData: IUser = {
    firstName: '',
    lastName: '',
    service: '',
    date: '',
    phone: '',
  };
  constructor(
    private router: Router,
    private connectionService: ConnectionService
  ) {}

  ngOnInit(): void {
    this.isDone = false;
  }

  addAppointment(): void {
    this.connectionService
      .addAppointment(this.userData)
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.isDone = true;

          setTimeout(() => {
            this.isDone = false;
          }, 3000);
        },
        (err) => {
          this.isDone = false;
        }
      );
  }

  cancelAppointment(): void {
    const result = confirm(
      `Are you sure you want to cancel appointment: ${this.userData.firstName} ${this.userData.lastName}?`
    );
  }
}
