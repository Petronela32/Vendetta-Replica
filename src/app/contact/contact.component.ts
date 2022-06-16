import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interface/users.interface';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  userData: IUser = {
    firstName: '',
    lastName: '',
    service: '',
    date: '',
    hour: '',
    phone: '',
  };
  constructor(
    private route: Router,
    private connectionService: ConnectionService
  ) {}

  ngOnInit(): void {}

  addAppointment(): void {}
}
