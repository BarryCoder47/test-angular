import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define the DataResponse interface outside the class
interface DataResponse {
  users: any[]; // Replace `any` with the proper structure of a user object, if known
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataHandleService {
  private url = 'https://api.zippopotam.us/us/33162'; // Update to the correct URL if needed
  private url2 = 'https://dog.ceo/api/breeds/image/random'

  constructor(private _http: HttpClient) {}

  // Use DataResponse type for type safety
  getData(): Observable<any> {
    return this._http.get<any>(this.url);
  }

    // Use DataResponse type for type safety
    getProduct(): Observable<any> {
      return this._http.get<any>(this.url2);
    }

  fetchAndLogData() {
    this._http.get(this.url).subscribe({
      next: (data) => console.log('Fetched data from service:', data),
      error: (err) => console.error('Fetch error in service:', err),
    });
  }
}
