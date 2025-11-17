// src/app/components/product-form/product-form.component.ts
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { RatingModule } from 'primeng/rating';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    RatingModule
  ],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  @Input() visible = false;
  @Input() product: Product | null = null;
  @Input() isEditMode = false;
  @Output() closed = new EventEmitter<void>();
  @Output() save = new EventEmitter<Product>();

  formData: Partial<Product> = {
    name: '',
    description: '',
    image: '',
    price: 0,
    quantity: 0,
    unit: 'pcs',
    barcode: '',
    rating: 1
  };

  ngOnChanges() {
    if (this.product && this.isEditMode) {
      this.formData = { ...this.product };
    } else {
      this.resetForm();
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      description: '',
      image: '',
      price: 0,
      quantity: 0,
      unit: 'pcs',
      barcode: '',
      rating: 1
    };
  }

  onSubmit() {
    if (this.isValidForm()) {
      const product: Product = {
        id: this.isEditMode ? (this.product?.id || 0) : 0,
        name: this.formData.name!,
        description: this.formData.description!,
        image: this.formData.image!,
        price: this.formData.price!,
        quantity: this.formData.quantity!,
        unit: this.formData.unit!,
        barcode: this.formData.barcode!,
        rating: this.formData.rating!,
        createdAt: this.isEditMode ? this.product!.createdAt : new Date(),
        updatedAt: new Date()
      };
      this.save.emit(product);
      this.resetForm();
    }
  }

  isValidForm(): boolean {
    return !!(
      this.formData.name?.trim() &&
      this.formData.description?.trim() &&
      this.formData.image?.trim() &&
      this.formData.barcode?.trim() &&
      this.formData.price! > 0
    );
  }

  onHide() {
    this.closed.emit();
  }
}