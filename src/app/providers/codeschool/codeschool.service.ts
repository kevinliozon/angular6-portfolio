import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeschoolService {

  constructor(private http: HttpClient) { }

  /**
   * No need to invoke map() to parse out the response. Method has been removed,
   * and we simply return the Observable. Default responseType is JSON,
   * so the response data is already parsed for us
   *
   * https://www.codeschool.com/users/kevinliozon.json
   *
   * @param {string} id
   * @returns {Observable<any>}
   */
  public getCodeschoolProfile(): Observable<any> {
    return this.http.get<any>('https://kevinliozon.com/data/mock-codeschool.json');
  }

}
