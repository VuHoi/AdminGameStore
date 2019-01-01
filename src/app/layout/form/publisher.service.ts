import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private httpClient: HttpClient) { }
  getPublisher = () => {
    return this.httpClient.get('/api/api/Publishers').pipe(
      map(res => res));
  }

  postPublisher = (publisher: any) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.post('/api/api/Publishers', publisher, httpOptions).pipe(
      map(res => res));
  }

  postImagePublisher = (image: any) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.post('/api/api/Images/publisher', image, httpOptions).pipe(
      map(res => res));
  }

  editPublisher = (image: any) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.put(`/api/api/Publishers/${image.id}`, image, httpOptions).pipe(
      map(res => res));
  }
}
