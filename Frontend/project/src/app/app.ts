import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  products: Product[] = [];
  
  // Egy üres objektum, amit az űrlaphoz kötünk
  newProduct: Product = { name: '', category: '', quantity: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Hiba a termékek betöltésekor:', err)
    });
  }

  onAddProduct() {
    // Ne engedjünk üres terméket menteni
    if (!this.newProduct.name || !this.newProduct.category) {
      alert('Kérlek töltsd ki a nevet és a kategóriát!');
      return;
    }

    this.productService.addProduct(this.newProduct).subscribe({
      next: (addedProduct) => {
        // Hozzáadjuk a listához a sikeres mentés után
        this.products.push(addedProduct);
        
        // Kiürítjük az űrlapot
        this.newProduct = { name: '', category: '', quantity: 0 };
      },
      error: (err) => console.error('Hiba a termék mentésekor:', err)
    });
  }
}
