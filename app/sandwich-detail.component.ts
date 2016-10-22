import { Component, Input } from '@angular/core';
import { Sandwich } from "./sandwich";

@Component({
  selector: 'my-sandwich-detail',
  template: `
    <div *ngIf="sandwich">
        <marquee behavior="alternate" direction="right"><h2>{{sandwich.name}}</h2></marquee>
        <label for="name">name:</label>
        <input type="text" name="name" [(ngModel)]="sandwich.name" />
        <button (click)="onSelect()">&times;</button>
    </div>
  `
})
export class SandwichDetailComponent {
  @Input()
  sandwich: Sandwich;
}

