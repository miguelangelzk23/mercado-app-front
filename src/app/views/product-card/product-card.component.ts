import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ CommonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  isQuantitySelectorVisible = false; // Controla si el selector de cantidad está visible
  quantity = 1; // Cantidad inicial

  // Muestra el selector de cantidad
  showQuantitySelector() {
    this.isQuantitySelectorVisible = true;
  }

  // Incrementa la cantidad
  increaseQuantity() {
    this.quantity++;
  }

  // Decrementa la cantidad (asegurando que no sea menor a 1)
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
