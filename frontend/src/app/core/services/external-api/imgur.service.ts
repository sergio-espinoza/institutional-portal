import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IImgurResponse, IImgurResponseData } from '../../../shared/models';

@Injectable({ providedIn: 'root' })
export class ImgurService {
  private url = 'https://api.imgur.com/3/album/5D3FxFw';
  private clientId = '8fb0022acdeccd2';
  private accessToken = '93d221072951599e242fab73fb4e3f19ee0e4cb6';
  private headersAccess = new HttpHeaders({
    Authorization: `Bearer ${this.accessToken}`
  });

  constructor(
    private http: HttpClient
  ) { }

  public getImages(): Observable<IImgurResponseData[]> {
    return this.http.get<IImgurResponse>(
      `${this.url}/images`, { headers: this.headersAccess }).pipe(
        tap((imageSource: IImgurResponse) => console.log(imageSource)),
        map((imageSource: IImgurResponse) => imageSource.data));
  }
}
