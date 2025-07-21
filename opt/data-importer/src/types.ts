export type ExportFileExtension = 'json' | 'csv';
export type ExcelFileExtension = 'xls' | 'xlsx';
export type InputSchemaType = {
  name?: string;
  content: string;
};

export type ExportType = 'type' | 'schema';
export type ExportOptions = {
  filePath: string;
  exportType: ExportType;
};
