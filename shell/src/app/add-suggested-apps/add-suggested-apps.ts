import { ChangeDetectionStrategy, Component, ViewChild, signal } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RatingModule } from 'primeng/rating';
import { FileUploadModule } from 'primeng/fileupload';
import { SuggestedModel, ExportColumn, Column } from '../+state/suggest-app.models';
import {  toSignal } from '@angular/core/primitives';
import { SuggestedServices } from '../services/suggested-app';
import { MessageService, ConfirmationService } from 'primeng/api'
import { from } from 'rxjs';
@Component({
  selector: 'app-add-suggested-apps',
  imports: [
    TableModule,
    RatingModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    FileUploadModule,
    ToolbarModule,
    ToastModule,
    ButtonModule,
    TooltipModule,
    DynamicDialogModule,
  ],
  templateUrl: './add-suggested-apps.html',
  styleUrl: './add-suggested-apps.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSuggestedApps {

  suggests = toSignal(this.facade.suggested$);
  loading = toSignal(this.facade.loading$);
 
  Dialog = false;
  selectedsuggest: SuggestedModel[] | null = null;
  submitted = false;
  statuses = [
    { label: 'INSTOCK', value: 'instock' },
    { label: 'LOWSTOCK', value: 'lowstock' },
    { label: 'OUTOFSTOCK', value: 'outofstock' },
  ];

  cols: Column[] = [];
  exportColumns: ExportColumn[] = [];
  suggest: SuggestedModel = {} as SuggestedModel;

  @ViewChild('dt') dt!: Table;
  constructor(
    private facade: SuggestedServices,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.facade.loadsuggestes(); // Dispatch LOAD action via Facade

    this.cols = [
      { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
      { field: 'name', header: 'Name' },
      { field: 'image', header: 'Image' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' },
    ];

    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  openNew() {
    // this.product = {} as Product;
    // this.submitted = false;
    // this.productDialog = true;
  }

  editsugges(suggest: SuggestedModel) {
    // this.product = { ...product };
    // this.productDialog = true;
  }

  hideDialog() {
    // this.productDialog = false;
    // this.submitted = false;
  }

  deleteSelectedsuggest() {
    // if (!this.selectedProducts) return;

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.facade.deleteMultiple(this.selectedProducts.map(p => p.id));
        // this.selectedProducts = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  deleteSuggestedApps(suggest: SuggestedModel) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${suggest.title}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.facade.deleteSuggestedApps(suggest.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  saveSuggest() {
    this.submitted = true;

    if (this.suggest.title?.trim()) {
      if (this.suggest.id) {
        this.facade.updateSuggestedApps(this.suggest);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.facade.addSuggestedApps({ ...this.suggest, image: 'product-placeholder.svg' });
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }

      // this.suggestDialog = false;
      // this.product = {} as SuggestedModel;
    }
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warn';
      case 'OUTOFSTOCK': return 'danger';
    }
    return '';
  }


}
/*******************
 import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from '../../models/product.model';
import { Column, ExportColumn } from '../../models/column.model';
import * as ProductsActions from '../../state/products/products.actions';
import { selectAllProducts, selectLoading } from '../../state/products/products.selectors';
import { ProductsFacade } from '../../state/products/products.facade';
import { signal, toSignal } from '@angular/core/primitives';
import { toSignal } from '@angular/core;
import { RatingModule } from 'primeng/rating';
import { AutoFocusModule } from ';
import { deleteSuggestedApps } from '../+state/suggest-app.actions';
import { updateSuggestedApps } from '../+state/suggest-app.actions';

@Component({
  selector: 'app-table-products-demo',
  templateUrl: './table-products-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableProductsDemoComponent implements OnInit {
  // 🔹 Signals
  products = toSignal(this.facade.products$);
  loading = toSignal(this.facade.loading$);

  // 🔹 UI States
  productDialog = false;
  selectedProducts: Product[] | null = null;
  submitted = false;
  statuses = [
    { label: 'INSTOCK', value: 'instock' },
    { label: 'LOWSTOCK', value: 'lowstock' },
    { label: 'OUTOFSTOCK', value: 'outofstock' },
  ];

  cols: Column[] = [];
  exportColumns: ExportColumn[] = [];
  product: Product = {} as Product;

  @ViewChild('dt') dt!: Table;

  constructor(
    private facade: ProductsFacade,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.facade.loadProducts(); // Dispatch LOAD action via Facade

    this.cols = [
      { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
      { field: 'name', header: 'Name' },
      { field: 'image', header: 'Image' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' },
    ];

    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  openNew() {
    this.product = {} as Product;
    this.submitted = false;
    this.productDialog = true;
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  deleteSelectedProducts() {
    if (!this.selectedProducts) return;

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.facade.deleteMultiple(this.selectedProducts.map(p => p.id));
        this.selectedProducts = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${product.name}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.facade.deleteProduct(product.id!);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
      if (this.product.id) {
        this.facade.updateProduct(this.product);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.facade.addProduct({ ...this.product, image: 'product-placeholder.svg' });
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }

      this.productDialog = false;
      this.product = {} as Product;
    }
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warn';
      case 'OUTOFSTOCK': return 'danger';
    }
    return '';
  }
}

 *******************/