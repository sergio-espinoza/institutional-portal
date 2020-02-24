import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IImgurResponse, IImgurResponseData } from '../../../shared/models';

@Injectable({ providedIn: 'root' })
export class ImgurService {
  private url = 'https://api.imgur.com/3/album/c1j2vip';
  private clientId = '49a37f3c7c1eeff';
  private accessToken = 'ae6c716865806157b6c4ddfb6720c932800b5743';
  private headersAccess = new HttpHeaders({
    Authorization: `Bearer ${this.accessToken}`
  });

  constructor(
    private http: HttpClient
  ) { }

  getImages(): Observable<IImgurResponseData[]> {
    return this.http.get<IImgurResponse>(
      `${this.url}/images`, { headers: this.headersAccess }).pipe(
        tap((imageSource: IImgurResponse) => console.log(imageSource)),
        map((imageSource: IImgurResponse) => imageSource.data));
  }
}
