import { importType } from '@angular/compiler/src/output/output_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
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

  errorMessage: string = '';

  userData: IUser = {
    firstName: '',
    lastName: '',
    firstNameCancel: '',
    lastNameCancel: '',
    phoneCancel: '',
    service: '',
    date: '',
    phone: '',
  };

  constructor(private connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.isDone = false;
  }

  addAppointment(): void {
    if (
      !this.userData.firstName.trim() ||
      !this.userData.lastName.trim() ||
      !this.userData.service ||
      !this.userData.date ||
      !this.userData.phone
    ) {
      this.errorMessage = 'Completati toate campurile';
      return;
    } else {
      this.errorMessage = '';
    }

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
    if (
      !this.userData.firstNameCancel.trim() ||
      !this.userData.lastNameCancel.trim() ||
      !this.userData.phoneCancel
    ) {
      this.errorMessage = 'Completati toate campurile!';
      return;
    } else {
      this.errorMessage = '';
    }
    const result = confirm(
      `Are you sure you want to cancel appointment: ${this.userData.firstName} ${this.userData.lastName} ${this.userData.phone}?`
    );
    this.connectionService
      .cancelAppointment(this.userData)
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.isDone;
        },
        (err) => {
          this.isDone = false;
        }
      );
  }
}
