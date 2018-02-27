import { LibraryPage } from './../library/library';
import { Component } from '@angular/core';


import { FavoritesPage } from '../favorites/favorites';

@Component({
    selector: "page-tabs",
    template: `
        <ion-tabs selectedIndex="1">
        <ion-tab [root]="favoritesPage" fabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" fabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}