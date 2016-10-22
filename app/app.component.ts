import { Component, OnInit } from '@angular/core';

import { Sandwich } from "./sandwich";
import { SandwichService } from "./sandwich.service";

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
            <my-sandwich-detail [sandwich]="selectedSandwich"></my-sandwich-detail>
        </div>

    `,
    providers: [SandwichService]
})
export class AppComponent implements OnInit {
    title = 'Teeter';
    sandwiches: Sandwich[];
    selectedSandwich: Sandwich;

    constructor(private sandwichService: SandwichService) {}
    
    getSandwiches(): void {
        this.sandwichService.getSandwiches().then(sandwiches => this.sandwiches = sandwiches);
    }
    
    ngOnInit(): void {
        this.getSandwiches();
    }
    
    onSelect(sandwich: Sandwich): void {
        this.selectedSandwich = sandwich;
    }
}