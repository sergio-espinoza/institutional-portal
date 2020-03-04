import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  DocumentsGroupHttpService
} from '../../../../core/http/group/documents/documents.http.service';
import { DocumentModel } from '../../../../shared/models/component/group.model';
import { SectionModel } from '../../../../shared/models';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsGroupComponent implements OnInit, OnDestroy {
  dataSource: any[];
  srcSelected: string;
  documentSubscription: Subscription;

  documentSources$: Observable< {title: string, documents: DocumentModel[] }> ;

  titleDocumentsGroup = '';

  sectionData: SectionModel = {
    title: 'Documentos',
    background: 'https://i.imgur.com/yg3Qdqv.jpg'
  };

  displayedColumns: string[] = [ 'name', 'size' ];
  constructor(
    private dgHttpService: DocumentsGroupHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.dgHttpService.getDocuments(params.get('id')).subscribe(
          (documentSources: { title: string, documents: DocumentModel[] }) => {
            this.dataSource = documentSources.documents;
            this.srcSelected = documentSources.documents[0] ? documentSources.documents[0].src : '';
            this.titleDocumentsGroup = documentSources.title;
          }
        );
      });
  }

  // getDocuments(): void {
  //   this.documentSources$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) =>
  //       this.dgHttpService.getDocuments(params.get('id')))
  //     );
  // }

  ngOnDestroy() {
    this.documentSubscription.unsubscribe();
  }

}
