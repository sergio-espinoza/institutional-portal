import { Injectable } from '@angular/core';
import { documentsPageData } from './document.data';
import { DocumentGroupServiceModel } from '../../../../shared/models/component/group.model';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  public documentsPageData: DocumentGroupServiceModel = documentsPageData;

  constructor(

  ) { }

  public getGroupModuleData(selector: string) {

  }


}
