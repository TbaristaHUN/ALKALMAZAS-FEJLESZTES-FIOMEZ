export interface Product {
  id?: string; // Opcionális, mert POST-nál a backend generálja
  name: string;
  category: string;
  quantity: number;
}