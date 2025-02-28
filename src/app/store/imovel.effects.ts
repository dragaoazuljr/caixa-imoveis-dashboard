import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as ImovelActions from './imovel.actions';
import * as Papa from 'papaparse';
import { Imovel } from './imovel.state';

@Injectable()
export class ImovelEffects {

  uploadCsv$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImovelActions.uploadCsv),
      switchMap(({ file }) => {
        return new Promise<Imovel[]>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const csvText = e.target && e.target.result as string;
            if (csvText) {
              Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (result: Papa.ParseResult<Imovel>) => {
                  resolve(result.data);
                },
                error: (error: any) => {
                  reject(error.message);
                }
              });
            } else {
              reject('Error reading CSV file.');
            }
          };
          reader.onerror = () => {
            reject('Error reading CSV file.');
          };
          reader.readAsText(file);
        }).then(
          (imoveis: Imovel[]) => ImovelActions.loadImoveisSuccess({ imoveis }),
          (error: string) => ImovelActions.loadImoveisFailure({ error })
        );
      })
    );
  }
  );

  constructor(private actions$: Actions) {}
}