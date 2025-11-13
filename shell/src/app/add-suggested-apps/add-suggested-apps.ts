import { ChangeDetectionStrategy, Component, Signal, ViewChild, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
import { SuggestedServices } from '../services/suggested-app';
import { MessageService, ConfirmationService } from 'primeng/api';

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
  providers: [ConfirmationService, MessageService]
})
export class AddSuggestedApps {

   suggests = toSignal(this.facade.suggested$);
  loading = toSignal(this.facade.loading$);
 // suggests = toSignal(this.facade.suggested$, { initialValue: [] as SuggestedModel[] }) as Signal<SuggestedModel[]>;
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
/***************
    id: string 
    title?: string;
    description?: string;
    url?: string;
    image?: string;
 
 **************/
  ngOnInit(): void {
    this.facade.loadsuggestes();

    this.cols = [
      { field: 'id', header: 'id', customExportHeader: 'Code' },
      { field: 'title', header: 'Title' },
      { field: 'description', header: 'Description' },
      { field: 'url', header: 'URL' },
      { field: 'image', header: 'Image' },
    ];

    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  deleteSelectedsuggest(){}
  openNew(){}
  exportCSV() {
    this.dt.exportCSV();
  }

  deleteSuggestedApps(suggest: Signal<SuggestedModel>[]|undefined|any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${suggest.title}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.facade.deleteSuggestedApps(suggest.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Suggested App Deleted',
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
      } else {
        this.facade.addSuggestedApps({
          ...this.suggest,
          image: 'placeholder.png',
        });
      }
    }
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warn';
      case 'OUTOFSTOCK': return 'danger';
      default: return '';
    }
  }

  editsugges(suggest :any) {
    
  }

}
