import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { InventoryList } from './components/inventory-list/inventory-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'inventory', component: InventoryList },
  { path: '**', redirectTo: '' } // Ha elgépelnék az utat, dobja vissza a főoldalra
];