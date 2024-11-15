
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
      <!-- <button hlm-carousel-previous></button>
      <button hlm-carousel-next></button> -->
    </hlm-carousel>
  </div>
  <div class="w-11/12 mt-5">
  <h3 class="mx-4"> Categorias</h3>
  <div class="flex overflow-x-auto items-center justify-center  md:items-center md:justify-center ml-1 -mr-3 mt-3 mb-3">
  @for (item of Pasillos; track item) {
    <section hlmCard class="bg-green-50 h-20 w-20 rounded-sm flex-shrink-0  mx-1.5  mb-2 shadow-md ">
      <img class="object-cover w-full h-full rounded-md" src="{{item.UrlImage}}" alt="">
    </section>
  }
</div>
</div>
<hr>
  `,
})

export class CarouselPreviewComponent {
//  items = Array.from({ length: 5}, (_, i) => i + 1);
@ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;

  autoplayPlugin: any;
  embla: any;


  // Configura las opciones del carrusel
  carouselOptions = {
    loop: true, // Habilita el loop
  };

  //items = Array.from({ length: 6 });

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

Pasillos :Category []= [
  {
  Id: 1,
  Nombre:"Plaza",
  Descripcion:"Plaza de mercado",
  UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/v1.png"
},
{
  Id: 2,
  Nombre:"Plaza",
  Descripcion:"Plaza de mercado",
  UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/v2.png"

  },  {
  Id: 3,
  Nombre:"Plaza",
  Descripcion:"Plaza de mercado",
  UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/v3.png"
},
{
  Id: 4,
  Nombre:"Plaza",
  Descripcion:"Plaza de mercado",
  UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/v4.png"
},

]

  // ngAfterViewInit() {
  //   // Configura EmblaCarousel manualmente
  //   this.embla = EmblaCarousel(this.carouselContainer.nativeElement, { loop: true });
  //   this.autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: true });


  // }

  ngOnInit() {
 //   this.embla = EmblaCarousel(this.carouselContainer.nativeElement, { loop: true });
    this.autoplayPlugin = Autoplay({ delay: 2500, stopOnInteraction: true ,playOnInit:true});
  //  this.embla.on('init', () => this.autoplayPlugin.init(this.embla));
  //this.embla = EmblaCarousel(this.carouselContainer.nativeElement, { loop: true })
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
interface Category  {
  Id:number,
  Nombre:string,
  UrlImage:string,
  Descripcion:string
}
