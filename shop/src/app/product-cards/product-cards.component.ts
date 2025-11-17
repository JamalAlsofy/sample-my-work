import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

type EntitiesState<T> = {
  ids: Array<string | number>;
  entities: Record<string | number, T>;
};

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    InputNumberModule
  ],
  templateUrl: './product-cards.component.html'
})
export class ProductCardsComponent implements OnInit {
  private productService = inject(ProductService);

  // ← 1) صراحة نحدّد نوع الشيء المُرجَع من الـ service
  products$: Observable<EntitiesState<Product>> = this.productService.getProducts() as unknown as Observable<EntitiesState<Product>>;

  // اذا كان id من نوع string استخدم { [key:string]: number } بدل أي
  purchaseQuantities: { [key: string]: number } = {};

  ngOnInit() {
    this.productService.loadProducts();
  }

  rateProduct(productId: number , rating: number) {
    this.productService.rateProduct(productId, rating);
  }

  purchaseProduct(product: Product) {
    const idKey = String(product.id);
    const quantity = this.purchaseQuantities[idKey] ?? 1;

    if (quantity > product.quantity) {
      alert('Insufficient stock!');
      return;
    }

    this.productService.purchaseProduct({
      productId: product.id,
      quantity: quantity
    });

    this.purchaseQuantities[idKey] = 1;

    alert(`Purchased ${quantity} ${product.unit}(s) of ${product.name}`);
  }

  // ← 2) this returns an object suitable for [ngClass]
  getStockColor(quantity: number): { [klass: string]: boolean } {
    if (quantity === 0) return { 'text-red-500': true };
    if (quantity < 10) return { 'text-orange-500': true };
    return { 'text-green-500': true };
  }

  getStockStatus(quantity: number): string {
    if (quantity === 0) return 'Out of Stock';
    if (quantity < 10) return 'Low Stock';
    return 'In Stock';
  }
}
