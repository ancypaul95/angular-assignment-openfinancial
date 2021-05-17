import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.header') as HTMLElement;
    // console.log(window.pageYOffset, element.clientHeight)
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('header_inverse');
    } else {
      element.classList.remove('header_inverse');
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
