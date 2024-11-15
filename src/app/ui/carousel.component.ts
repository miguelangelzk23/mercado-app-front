
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent, HlmCarouselNextComponent, HlmCarouselPreviousComponent } from '../../components/ui-carousel-helm/src/index';
import  Autoplay from 'embla-carousel-autoplay'
import EmblaCarousel from 'embla-carousel';
@Component({
  selector: 'spartan-carousel-preview',
  standalone: true,
  imports: [HlmCarouselComponent, HlmCarouselContentComponent,HlmCarouselItemComponent,HlmCarouselNextComponent,HlmCarouselPreviousComponent,],
  template: `
  <h3 class="mx-4 mb-1.5">Promociones</h3>
  <div class="flex items-center justify-center ">
    <hlm-carousel class="w-11/12"
    [plugins]="[autoplayPlugin]"
        (mouseenter)="stopAutoplay()"
        (mouseleave)="resetAutoplay()"
        #carouselContainer>
      <hlm-carousel-content class="-ml-1 ">
      @for (item of Categories; track item) {
        <hlm-carousel-item class="rounded-sm px-1.5 md:px-2 basis-[85%] sm:basis-[85%] md:basis[100%] md:basis-1/3 lg:basis-1/3 ">
            <section hlmCard class="h-28 lg:h-28">
                <img   class="object-cover w-full h-full rounded-md"  src="{{item.UrlImage}}" alt="">
            </section>
        </hlm-carousel-item>
      }
      </hlm-carousel-content>
    </hlm-carousel>
  </div>

<hr>
  `,
})

export class CarouselPreviewComponent {
//  items = Array.from({ length: 5}, (_, i) => i + 1);
@ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;

  autoplayPlugin: any;
  embla: any;

  carouselOptions = {
    loop: true, // Habilita el loop
  };
  Categories :Category []= [
    {
    Id: 1,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner1.png"
  },
  {
    Id: 2,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner2.png"

    },  {
    Id: 3,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png"
  },
  {
    Id: 4,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://bogota.gov.co/sites/default/files/styles/1050px/public/2021-05/puestos-en-las-plazas-de-mercado.jpg"
  },

]
  ngOnInit() {
    this.autoplayPlugin = Autoplay({ delay: 2500, stopOnInteraction: true ,playOnInit:true});
  }

  stopAutoplay() {
    this.autoplayPlugin.stop();
  }

  Reinit() {
    this.autoplayPlugin.Reinit();
  }
  resetAutoplay() {
    this.autoplayPlugin.reset();
  }

  ngOnDestroy() {
    // Aquí podrías limpiar el plugin si es necesario
    this.autoplayPlugin.destroy();
  }
}
export interface Category  {
  Id:number,
  Nombre:string,
  UrlImage:string,
  Descripcion:string
}
