import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegexValidationService {
  _url='http://localhost:4567/validate';
  constructor(private _http: HttpClient) { }

  validate(user : User)
  {
    return this._http.post<any>(this._url,user);
  }
}
