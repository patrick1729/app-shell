import { Component, OnInit } from '@angular/core';
import { GalleryFacade } from '@app-shell/shared/data-store';

@Component({
    selector: 'app-shell-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'shell';

    constructor(private galleryFacade: GalleryFacade) {}

    ngOnInit(): void {
        this.galleryFacade.init();
    }
}
