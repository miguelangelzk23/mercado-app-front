import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { lucideAirplay, lucideMenu, lucideShoppingBag } from '@ng-icons/lucide';

import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HlmIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [provideIcons({ lucideShoppingBag,lucideMenu })],
})
export class NavbarComponent {
  constructor(private renderer: Renderer2){

  }
  ngAfterViewInit() {
    this.initNavbar();
  }

  initNavbar() {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    burger.forEach(b => {
      b.addEventListener('click', () => {
        menu.forEach(m => {
          m.classList.toggle('hidden');
        });
      });
    });

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    close.forEach(c => {
      c.addEventListener('click', () => {
        menu.forEach(m => {
          m.classList.toggle('hidden');
        });
      });
    });

    backdrop.forEach(b => {
      b.addEventListener('click', () => {
        menu.forEach(m => {
          m.classList.toggle('hidden');
        });
      });
    });
  }

}
