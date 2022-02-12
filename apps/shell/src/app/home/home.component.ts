import { Component, OnInit } from '@angular/core';
import { GalleryFacade } from '@app-shell/shared/data-store';
import { map } from 'rxjs';

@Component({
    selector: 'app-shell-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    cats = this.galleryFacade.selectedCats$.pipe(
        map((selectedCats: any) => Array.from(selectedCats.values()))) as any;

    constructor(private galleryFacade: GalleryFacade) {
    }

    ngOnInit(): void {
        this.cats.subscribe((response: any) => {
            console.log(response);
        });
    }

}
