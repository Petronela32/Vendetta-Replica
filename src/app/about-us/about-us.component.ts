import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  @Input() content: string;

  @Output() click = new EventEmitter<string>();

  constructor(private route: Router) {}

  ngOnInit(): void {}
  
  btnClick(): void {
    this.click.emit('TEST');
  }
}
