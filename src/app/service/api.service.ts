import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  get(endpoint: string = null) {
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.URL_API + endpoint)
        .subscribe((response: any) => {
          if (response.status === 200) {
            console.log(response);
            resolve(response.result);
          } else {
            console.log(response);
            reject();
          }
        },
          error => {
            console.log(error as any);
            reject();
          });
    });
    return promise;
  }

  post(endpoint: string = null, body: any) {
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.URL_API + endpoint, body)
        .subscribe((response: any) => {
          if (response.status === 200) { resolve(response.result); }
        },
          error => {
            console.log(error as any);
            reject();
          });
    });
    return promise;
  }
}
