import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  getIndex() {
    const promise = new Promise((resolve, reject) => {

      this.http.get(this.URL_API)
        .subscribe(response => {
          console.log('Res2: ' + JSON.stringify(response));
          resolve();
        },
          error => {
            console.log('Error: ' + JSON.stringify(error));
            reject();
          });
    });
    return promise;
  }

  getHome() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.URL_API + 'home')
        .subscribe(response => {
          console.log('Res2: ' + JSON.stringify(response));
          resolve();
        },
          error => {
            console.log(error as any);
            reject();
          });
    });
    return promise;
  }
}
