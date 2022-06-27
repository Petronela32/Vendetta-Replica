import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchValue: string = '';

  constructor() {}

  ngOnInit(): void {
    const navBar = document.getElementById('nav-bar');

    const navBarPosition = navBar.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY > navBarPosition) {
        navBar.classList.add('active');
      } else {
        navBar.classList.remove('active');
      }
    });
  }

  clearValue(): void {
    this.searchValue = '';
  }

  searchCut(): void {
    window.open(`https://www.vendettasaloon.ro/preturi/`);
  }

  onSearchInput(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      this.searchCut();
    }
  }

  searchChange(ev: Event): void {
    this.searchValue = (ev.target as HTMLInputElement).value;
  }
}
