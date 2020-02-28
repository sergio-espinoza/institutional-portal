import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentModel } from '../../../../shared/models/component/group.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentsGroupHttpService {

  constructor(
    private http: HttpClient) { }

  getDocuments(src: string): Observable<{ title: string, documents: DocumentModel[] }> {
    return this.http.get<{ title: string, documents: DocumentModel[] }>(
      `assets/data/main/group/documents/${src}.json`
    );
  }


}
