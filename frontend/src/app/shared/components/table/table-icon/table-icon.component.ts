import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewComponent } from '../../modal';
import { PageSizeService } from '../../../../core/services/shared/page-size.service';

@Component({
  selector: 'app-table-icon',
  templateUrl: './table-icon.component.html',
  styleUrls: ['./table-icon.component.css']
})
export class TableIconComponent implements OnInit {
  @Input() displayedColumns: string[];
  @Input() viewIcons = true;
  @Input() set dataSource(externalDataSource: any[]) {
    this.getData(externalDataSource);
    this.internalDataSource = externalDataSource;
  }
  get dataSource(): any[] {
    return this.internalDataSource;
  }

  @Output() changeIndexDocument = new EventEmitter<string>();

  public pageSizeOptions: number[] = this.psService.getPageSizeOptions();
  private internalDataSource: any[];
  public data: MatTableDataSource<any[]>;
  public columns: string[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private psService: PageSizeService
  ) {
  }

  ngOnInit(): void {
    this.getData(this.dataSource);
    this.columns = ['n', 'type', ...this.displayedColumns, 'createdat', 'actions'];
  }

  public applyFilter(filterValue: string): void {
    this.data.filter = filterValue.trim().toLowerCase();
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  private getData(externalData: any[]): void {
    this.data = new MatTableDataSource(externalData);
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }

  public openDocumentInModal(element: { src: string, name: string }): void {
    const dialogRef = this.dialog.open(PdfViewComponent, {
      panelClass: 'dialog-complete',
      data: {
        url: `https://drive.google.com/file/d/${element.src}/preview`,
        name: element.name
      }
    });
  }

  public openDocumentDirectly(src: string): void {
    this.changeIndexDocument.emit(src);
  }

}
