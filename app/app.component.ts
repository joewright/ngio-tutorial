import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title || "wut"}}</h1>
        <h4>Sandwiches</h4>
        <ul>
            <li *ngFor="let sandwich of sandwiches" 
                (click)="onSelect(sandwich)"
                [class.selected]="sandwich === selectedSandwich">{{sandwich.name}}</li>
        </ul>
        
        <div *ngIf="selectedSandwich">
            <h2>{{selectedSandwich.name}}</h2>
            <label for="name">name:</label>
            <input type="text" name="name" [(ngModel)]="selectedSandwich.name" />
            <button (click)="onSelect()">&times;</button>
        </div>

    `
})
export class AppComponent {
    title = 'Teeter';
    sandwiches = SANDWICHES;
    onSelect(sandwich: Sandwich): void {
        this.selectedSandwich = sandwich;
    }
}

export class Sandwich {
    id: number;
    name: string;
}

const SANDWICHES: Sandwich[] = [
    { id: 1, name: 'BBQ Pork Sub'},
    { id: 2, name: 'Breaded Chicken Sub'},
    { id: 3, name: 'Club Sub'},
    { id: 4, name: 'Grilled Chicken Sub'},
    { id: 5, name: 'Grilled Veggie Sub'},
    { id: 6, name: 'Ham Sub'},
    { id: 7, name: 'Italian Sub'},
    { id: 9, name: 'Meatball Sub'},
    { id: 10, name: 'Philly Cheesesteak Sub'},
    { id: 11, name: 'Roast Beef Sub'},
    { id: 12, name: 'Sausage & Pepper Sub'},
    { id: 13, name: 'Tuna Salad Sub'},
    { id: 14, name: 'Turkey Breast Sub'},
    { id: 15, name: 'Veggie Sub'}
];