import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { VEICULOS_ROUTES } from './veiculos.routes';

export const veiculoConfig: ApplicationConfig = {
  providers: [provideRouter(VEICULOS_ROUTES)],
};
