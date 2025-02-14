import { Routes } from '@angular/router';
import { VEICULOS_ROUTES } from './veiculos/veiculos.routes';

export const APP_ROUTES: Routes = [
  {
    path: 'veiculos',
    children: VEICULOS_ROUTES,
  },
  { path: '', redirectTo: 'veiculos', pathMatch: 'full' },
  { path: '**', redirectTo: 'veiculos' },
];
