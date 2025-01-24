import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // This ensures the service is globally available
})
export class DataFetchService {
  API = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getDataFetch() {
    return this.http.get(this.API);
  }

}
