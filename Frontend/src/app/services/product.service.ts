import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // A docker-compose-ban az 5001-es portot exponáltuk ki a backendnek
  private apiUrl = 'http://localhost:5001/api/Products';

  constructor(private http: HttpClient) { }

  // Termékek lekérdezése (GET)
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Új termék hozzáadása (POST)
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}