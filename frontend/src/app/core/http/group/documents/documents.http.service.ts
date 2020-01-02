import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentModel } from '../../../../shared/models/component/group.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentsGroupHttpService {

  constructor(
    private http: HttpClient) { }

  getDocuments(src: string): Observable<Array<DocumentModel>> {
    return this.http.get<Array<DocumentModel>>(
      `assets/data/main/group/documents/${src}.json`
    );
  }


}
