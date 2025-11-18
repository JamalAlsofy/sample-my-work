import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
import { ProductFormComponent } from './../product-form/product-form.component';
// src/app/pages/product-table/product-table.component.ts
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    RatingModule,
    FormsModule,
    ProductFormComponent
  ],
  templateUrl: './product-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent implements OnInit {
  private productService = inject(ProductService);

  products$ = this.productService.getProducts();
  displayDialog = false;
  selectedProduct: Product | null = null;
  isEditMode = false;

  ngOnInit() {
    this.productService.loadProducts();
  }

  showAddDialog() {
    this.selectedProduct = null;
    this.isEditMode = false;
    this.displayDialog = true;
  }

  showEditDialog(product: Product) {
    this.selectedProduct = { ...product };
    this.isEditMode = true;
    this.displayDialog = true;
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
    }
  }

  onDialogClose() {
    this.displayDialog = false;
    this.selectedProduct = null;
  }

  onProductSaved(product: Product) {
    if (this.isEditMode) {
      this.productService.updateProduct(product);
    } else {
      this.productService.addProduct(product);
    }
    this.displayDialog = false;
  }
}