import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './ui/accordion.componnet';
import { HlmButtonDirective } from '../components/ui-button-helm/src/lib/hlm-button.directive';
import { InputSearchComponent } from './ui/input-search.componet';
import { CarouselPreviewComponent } from './ui/carousel.component';
import { HlmCarouselComponent } from "../components/ui-carousel-helm/src/lib/hlm-carousel.component";
import { HlmCarouselContentComponent } from "../components/ui-carousel-helm/src/lib/hlm-carousel-content.component";
import { HlmCarouselItemComponent } from "../components/ui-carousel-helm/src/lib/hlm-carousel-item.component";
import PocketBase from  'pocketbase'
import { NavbarComponent } from './views/navbar/navbar.component';
import { ProductCardComponent } from './views/product-card/product-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent, NavbarComponent,RouterOutlet, AccordionComponent, HlmButtonDirective, InputSearchComponent, CarouselPreviewComponent, HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   pb = new PocketBase('http://127.0.0.1:8080');
  title = 'mercado-app';
  listProducts: number[] = [1,2,3,4,5,6]
  ngOnInit(): void {
    this.consultarCategorias()

  }

  async consultarCategorias(){
    const resultList = await this.pb.collection('Categoria').getList(1, 50);
    console.log(resultList)
  }

}
