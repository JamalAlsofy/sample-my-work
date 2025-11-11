/**
 * Interface for the 'SuggestApp' data
 * export interface SuggestAppEntity {
  id: string | number; // Primary ID
  name: string;
}
 */
export interface SuggestedModel {
    id: string 
    title?: string;
    description?: string;
    url?: string;
    image?: string;
}


export interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

export interface ExportColumn {
  title: string;
  dataKey: string;
}
