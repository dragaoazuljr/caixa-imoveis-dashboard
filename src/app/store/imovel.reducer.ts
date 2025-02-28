import { createReducer, on } from '@ngrx/store';
import { initialImovelState, ImovelState } from './imovel.state';
import * as ImovelActions from './imovel.actions';
import { createEntityAdapter } from '@ngrx/entity';

export const imovelAdapter = createEntityAdapter<any>();

export const imovelReducer = createReducer(
  initialImovelState,
  on(ImovelActions.loadImoveis, (state) => ({ ...state, loading: true })),
  on(ImovelActions.loadImoveisSuccess, (state, { imoveis }) =>
    imovelAdapter.setAll(imoveis, { ...state, loading: false, error: null })
  ),
  on(ImovelActions.loadImoveisFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);