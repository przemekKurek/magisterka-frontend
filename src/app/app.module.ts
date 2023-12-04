import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { WarMenuComponent } from './war/war-menu/war-menu.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CompareTableComponent } from './war/compare-table/compare-table.component';
import { HelpComponent } from './help/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    WarMenuComponent,
    CompareTableComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
