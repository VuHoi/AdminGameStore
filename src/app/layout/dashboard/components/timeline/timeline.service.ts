import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private httpClient: HttpClient) { }
  getTimeLine = () => {
    return this.httpClient.get('/api/api/UserGame').pipe(
      map(res => res));
  }
}
