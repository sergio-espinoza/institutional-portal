import { Injectable } from '@angular/core';
import { documentsPageData } from './document.data';
import { DocumentGroupServiceModel, DocumentModel } from 'src/app/shared/models/component/group.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  documentsPageData: DocumentGroupServiceModel = documentsPageData;

  constructor() { }

  getGroupModuleData(selector: string) {

  }


}
