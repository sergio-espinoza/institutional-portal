import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  DocumentsGroupHttpService
} from '../../../../core/http/group/documents/documents.http.service';
import { DocumentModel } from '../../../../shared/models/component/group.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsGroupComponent implements OnInit {
  dataSource: any[];
  srcSelected: string;

  displayedColumns: string[] = [ 'name', 'size' ];
  constructor(
    private dgHttpService: DocumentsGroupHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.dgHttpService.getDocuments(params.get('id')).subscribe(
          (documents: DocumentModel[]) => {
            this.dataSource = documents;
            this.srcSelected = documents[0].src;
          }
        );
      });
  }

}
