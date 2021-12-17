import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="http://localhost:8080/products"
  constructor(private http: HttpClient) { }

  //we will get api after hitting this call
  getProduct(){
    return this.http.get(this.url);
    }
  }

