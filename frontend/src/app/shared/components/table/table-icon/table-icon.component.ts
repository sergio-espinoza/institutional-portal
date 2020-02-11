import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewComponent } from '../../modal';

const pageSizeOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 55, 70, 75,
  80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165,
  170, 175, 180, 185, 190, 195, 200];
@Component({
  selector: 'app-table-icon',
  templateUrl: './table-icon.component.html',
  styleUrls: ['./table-icon.component.css']
})
export class TableIconComponent implements OnInit {
  pageSizeOptions: number[] = pageSizeOptions;

  private internalDataSource: any[];

  get dataSource(): any[] {
    return this.internalDataSource;
  }

  @Input() set dataSource(value: any[]) {
    this.getData(value);
    this.internalDataSource = value;
  }

  @Input() displayedColumns: string[];
  @Output() changeIndexDocument = new EventEmitter<string>();

  data: MatTableDataSource<any[]>;
  columns: string[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getData(this.dataSource);
    this.columns = ['n', 'type', ...this.displayedColumns, 'createdat', 'actions'];
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  getData(externalData: any[]) {
    this.data = new MatTableDataSource(externalData);
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }

  openFormDialog(item: any, index: number): void {
  }

  openDocumentInModal(element: { src: string, name: string }) {
    const dialogRef = this.dialog.open(PdfViewComponent, {
      panelClass: 'complete',
      data: {
        url: `https://drive.google.com/file/d/${element.src}/preview`,
        name: element.name
      }
    });
  }

  openDocumentDirectly(src: string) {
    this.changeIndexDocument.emit(src);
  }

}
