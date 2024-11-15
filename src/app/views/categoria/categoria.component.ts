import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PasillosComponent } from '../pasillos/pasillos.component';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [ProductCardComponent,PasillosComponent],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {
   categoriaId:string | null = ''
   activateRoute = inject(ActivatedRoute)
   listProducts: number[] = [1,2,3,4,5,6]
  ngOnInit(): void {
     this.activateRoute.paramMap.subscribe(params => {
        this.categoriaId = params.get('id'); // Guarda el parámetro "id" en una variable
      });
     }
}
