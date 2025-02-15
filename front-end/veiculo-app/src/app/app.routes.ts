import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'veiculos', pathMatch: 'full' },
  {
    path: 'veiculos',
    loadChildren: () => import('./veiculos/veiculos.routes').then((m) => m.VEICULOS_ROUTES),
  },
  { path: '**', redirectTo: 'veiculos' },
];
