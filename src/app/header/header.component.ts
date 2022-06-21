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

  ngOnInit(): void {
    const navBar = document.getElementById('nav-bar');

    const navBarPosition = navBar.offsetTop;

    window.addEventListener('scroll', () => {
      // console.log(window.scrollY);
      console.log(navBarPosition);
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
    // this.router.navigate(['/search', this.searchValue]);
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
