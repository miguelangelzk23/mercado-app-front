import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent  implements OnInit {
  ProductId:string | null = ''
  activateRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
       this.ProductId = params.get('id'); // Guarda el parámetro "id" en una variable
     });
    }
}


