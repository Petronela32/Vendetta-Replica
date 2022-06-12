import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchValue: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clearValue(): void {
    this.searchValue = '';
  }

  searchCut(): void {
    this.router.navigate(['/search', this.searchValue]);
  }
  onSearchInput(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      this.searchCut();
    }
  }
}
