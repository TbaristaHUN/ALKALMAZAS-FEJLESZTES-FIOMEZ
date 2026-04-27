import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './inventory-list.html',
  styleUrl: './inventory-list.css'
})
export class InventoryList implements OnInit {
  products: Product[] = [];

  // Egy üres objektum, ami az űrlap adatait tárolja
  newProduct: Product = {
    id: '', 
    name: '',
    category: '', 
    quantity: null as any
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Adatok letöltése a backendről
  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.error('Hiba az adatok lekérésekor:', err)
    });
  }

  // Új termék mentése a backendre
  saveProduct() {
    if (!this.newProduct.name || !this.newProduct.category || !this.newProduct.quantity) {
      alert('Kérlek tölts ki minden mezőt!');
      return;
    }

    this.productService.addProduct(this.newProduct).subscribe({
      next: (addedProduct) => {
        // Ha sikeres a mentés, hozzáfűzzük a listához
        this.products.push(addedProduct);
        
        // Kiürítjük az űrlapot
        this.newProduct = {id: '', name: '', category: '', quantity: null as any };
      },
      error: (err) => console.error('Hiba a mentés során:', err)
    });
  }

  
}
