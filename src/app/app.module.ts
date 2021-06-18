import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsComponent } from './mat-chips/mat-chips.component';
import {MatChipsModule} from "@angular/material/chips";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { TrialComponent } from './trial/trial.component';

@NgModule({
  declarations: [
    AppComponent,
    MatChipsComponent,
    TrialComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatChipsModule,
        InfiniteScrollModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
