import { Injectable } from '@angular/core';
import { documentsPageData } from './document.data';
import { DocumentPageServiceModel, DocumentModel } from 'src/app/shared/models/component/group.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  documentsPageData: DocumentPageServiceModel = documentsPageData;

  constructor() { }

  getDocumentsPageData(selector: string): Observable<Array<DocumentModel>> {
    return of(documentsPageData[selector]);
  }


}
