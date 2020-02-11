import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  DocumentsGroupHttpService
} from '../../../../core/http/group/documents/documents.http.service';
import { DocumentModel } from '../../../../shared/models/component/group.model';
import { SectionModel } from '../../../../shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsGroupComponent implements OnInit, OnDestroy {
  dataSource: any[];
  srcSelected: string;
  documentSubscription: Subscription;

  titleDocumentsGroup = '';

  sectionData: SectionModel = {
    title: 'Documents',
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
          (documents: DocumentModel[]) => {
            this.dataSource = documents;
            this.srcSelected = documents[0].src;
            this.titleDocumentsGroup = params.get('id');
          }
        );
      });
  }

  ngOnDestroy() {
    this.documentSubscription.unsubscribe();
  }

}
