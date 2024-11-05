import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './ui/accordion.componnet';
import { HlmButtonDirective } from '../components/ui-button-helm/src/lib/hlm-button.directive';
import { InputSearchComponent } from './ui/input-search.componet';
import { CarouselPreviewComponent } from './ui/carousel.component';
import { HlmCarouselComponent } from "../components/ui-carousel-helm/src/lib/hlm-carousel.component";
import { HlmCarouselContentComponent } from "../components/ui-carousel-helm/src/lib/hlm-carousel-content.component";
import { HlmCarouselItemComponent } from "../components/ui-carousel-helm/src/lib/hlm-carousel-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccordionComponent, HlmButtonDirective, InputSearchComponent, CarouselPreviewComponent, HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mercado-app';
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
