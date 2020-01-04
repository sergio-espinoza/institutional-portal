import { Injectable } from '@angular/core';
import { documentsPageData } from './document.data';
import { DocumentGroupServiceModel } from '../../../../shared/models/component/group.model';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  documentsPageData: DocumentGroupServiceModel = documentsPageData;

  constructor() { }

  getGroupModuleData(selector: string) {

  }


}
