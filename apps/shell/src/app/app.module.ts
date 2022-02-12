import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GalleryStoreModule } from '@app-shell/shared/data-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: HomeComponent
                },
                {
                    path: 'gallery',
                    loadChildren: () =>
                        import('gallery/Module').then((m) => m.RemoteEntryModule),
                },
            ],
            { initialNavigation: 'enabledBlocking' }
        ),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        GalleryStoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
