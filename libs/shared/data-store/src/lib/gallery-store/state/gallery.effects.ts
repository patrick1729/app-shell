import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as GalleryActions from './gallery.actions';
import * as GalleryFeature from './gallery.reducer';

@Injectable()
export class GalleryEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GalleryActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return GalleryActions.loadGallerySuccess({ gallery: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return GalleryActions.loadGalleryFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
