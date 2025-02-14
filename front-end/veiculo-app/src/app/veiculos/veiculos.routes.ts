import { Routes } from '@angular/router';

export const VEICULOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./veiculo-list/veiculo-list.component').then((m) => m.VeiculoListComponent),
  },
  {
    path: 'novo',
    loadComponent: () =>
      import('./veiculo-form/veiculo-form.component').then((m) => m.VeiculoFormComponent),
  },
  {
    path: 'editar/:id',
    loadComponent: () =>
      import('./veiculo-form/veiculo-form.component').then((m) => m.VeiculoFormComponent),
  },
  { path: '**', redirectTo: '' },
];
