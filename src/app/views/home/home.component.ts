import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AccordionComponent } from 'app/ui/accordion.componnet';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { InputSearchComponent } from 'app/ui/input-search.componet';
import { CarouselPreviewComponent } from 'app/ui/carousel.component';
import { HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent } from '@spartan-ng/ui-carousel-helm';
import { PasillosComponent } from '../pasillos/pasillos.component';

interface categoriaHome {
  Id:number,
  label:string,
  listProducts:number[]
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PasillosComponent,RouterLink,RouterOutlet ,ProductCardComponent, NavbarComponent, AccordionComponent, HlmButtonDirective, InputSearchComponent, CarouselPreviewComponent, HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  listProducts: number[] = [1,2,3,4,5,6]
  categoriasHome: categoriaHome[] =[
    {
      Id:1,
      label:'Productos destacados2',
      listProducts: this.listProducts
    },{
      Id:2,
      label:'Descuentos',
      listProducts: this.listProducts
    },
  ]
}
