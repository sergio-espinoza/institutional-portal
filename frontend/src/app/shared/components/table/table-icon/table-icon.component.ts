import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
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
  @Input() dataSource: any;
  data: MatTableDataSource<any[]>;
  @Input() displayedColumns: string[];
  columns: string[];
  pageSizeOptions: number[] = pageSizeOptions;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getData();
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
    this.columns = ['n', 'type', ...this.displayedColumns, 'createdat', 'actions'];
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  getData() {
    this.data = new MatTableDataSource(this.dataSource);
  }

  openFormDialog(item: any, index: number): void {
  }

  openPdf() {
    const dialogRef = this.dialog.open(PdfViewComponent, {
      panelClass: 'complete',
      data: {
        url: 'https://drive.google.com/file/d/1DHNsNjrVUIIWiTsHg3uUKftHtcbQnB_qfRuFtVrRhNM/preview'
      }
    });
  }

}
