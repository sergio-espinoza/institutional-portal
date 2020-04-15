import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  DocumentsGroupHttpService
} from '../../../../core/http/group/documents/documents.http.service';
import { DocumentModel } from '../../../../shared/models/component/group.model';
import { SectionModel } from '../../../../shared/models';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsGroupComponent implements OnInit {

  public documentSources$: Observable< {title: string, documents: DocumentModel[] }>;
  public srcSelected = '';
  public sectionData: SectionModel = {
    title: 'Documentos',
    background: 'https://i.imgur.com/hombPA3.jpg'
  };
  public displayedColumns: string[] = [ 'name', 'size' ];

  constructor(
    private dgHttpService: DocumentsGroupHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  private getDocuments(): void {
    this.documentSources$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap((id: string) => this.dgHttpService.getDocuments(id)));
  }

}
