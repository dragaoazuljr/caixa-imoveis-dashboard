import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { imovelReducer } from './store/imovel.reducer';
import { ImovelEffects } from './store/imovel.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ imoveis: imovelReducer }),
    provideEffects([ImovelEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ]
};
