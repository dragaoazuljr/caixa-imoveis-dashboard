import { createAction, props } from '@ngrx/store';
import { Imovel } from './imovel.state';

export const loadImoveis = createAction('[Imovel] Load Imoveis');
export const loadImoveisSuccess = createAction(
  '[Imovel] Load Imoveis Success',
  props<{ imoveis: Imovel[] }>()
);
export const loadImoveisFailure = createAction(
  '[Imovel] Load Imoveis Failure',
  props<{ error: string }>()
);

export const uploadCsv = createAction('[Imovel] Upload CSV', props<{ file: File }>());