import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GalleryApiService } from './api/gallery-api.service';
import { GalleryEffects } from './state/gallery.effects';
import { GalleryFacade } from './state/gallery.facade';
import * as fromGallery from './state/gallery.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromGallery.GALLERY_FEATURE_KEY,
            fromGallery.reducer
        ),
        EffectsModule.forFeature([GalleryEffects]),
        HttpClientModule
    ],
    providers: [GalleryFacade, GalleryApiService],
})
export class GalleryStoreModule { }
