import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SandwichDetailComponent } from "./sandwich-detail.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, SandwichDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

