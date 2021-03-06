import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkModel } from '../../../../shared/models';
import { AddressModel, IAddressHttpModel } from '../../../../shared/models';

@Injectable({ providedIn: 'root' })
export class LinksGroupHttpService {

  constructor(
    private http: HttpClient
  ) { }

  // getLinks(src: string): Observable<{ title: string, links: LinkModel[] }> {
  //   return this.http.get<{ title: string, links: LinkModel[] }>(
  //     `assets/data/main/group/links/${src}.json`
  //   );
  // }
  public getAddresses(src: string): Observable<IAddressHttpModel> {
    return this.http.get<IAddressHttpModel>(
      `assets/data/main/group/links/${src}.json`);
  }


}
