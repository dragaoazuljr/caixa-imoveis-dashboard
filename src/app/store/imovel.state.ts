import { EntityState } from '@ngrx/entity';

export interface Imovel {
  [key: string]: any;
}

export interface ImovelState extends EntityState<Imovel> {
  loading: boolean;
  error: string | null;
}

export const initialImovelState: ImovelState = {
  ids: [],
  entities: {},
  loading: false,
  error: null
};