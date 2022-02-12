import { Component } from '@angular/core';
import { GalleryFacade } from '@app-shell/shared/data-store';

@Component({
    selector: 'app-shell-gallery-entry',
    template: `
    <div class="container">
        Gallery
    <ng-container *ngFor="let cat of cats | async">
       <div class="child" (click)="toggleSelectCat(cat)" [ngClass]="{ selected: isSelected(cat.id) | async }">
           <h3>{{ cat.title }}</h3>
          <div>
            <img [src]="cat.url" alt="" />
          </div>
        </div>
     </ng-container>
 </div>`,
    styles: [
        `
      .container {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(4, 1fr);
      }
      .selected {
          border: 3px solid purple;
      }
      img {
          width: 20vw;
      }
    `,
    ],
})
export class RemoteEntryComponent {
    cats = this.galleryFacade.allGallery$ as any;
    selectedCats = this.galleryFacade.selectedCats$;

    constructor(private galleryFacade: GalleryFacade) { }

    toggleSelectCat(cat: any) {
        this.galleryFacade.toggleSelectCat(cat);
    }
    isSelected(catId: any) {
        return this.galleryFacade.isCatSelected(catId);
    }
}
