import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PageSizeService } from '../../../../core/services/shared/page-size.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent implements OnInit {
  @Input() viewIcons = true;
  @Input() displayedColumns: string[];

  @Input() set dataSource(externalDataSource: any[]) {
    this.getData(externalDataSource);
    this.internalDataSource = externalDataSource;
  }
  get dataSource(): any[] {
    return this.internalDataSource;
  }

  public pageSizeOptions: number[] = this.psService.getPageSizeOptions();
  private internalDataSource: any[];
  public data: MatTableDataSource<any[]>;
  public columns: string[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private psService: PageSizeService
  ) { }

  ngOnInit(): void {
    this.getData(this.dataSource);
    this.columns = ['n', ...this.displayedColumns];
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

}
