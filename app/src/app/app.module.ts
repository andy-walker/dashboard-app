import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFilesListComponent } from './dashboard-files-list/dashboard-files-list.component';
import { DashboardTypesListComponent } from './dashboard-types-list/dashboard-types-list.component';
import { Error500Component } from './error-500/error-500.component';
import { LoadingComponent } from './loading/loading.component';
import { DashboardFilesListItemComponent } from './dashboard-files-list-item/dashboard-files-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardHeaderComponent,
    DashboardComponent,
    DashboardFilesListComponent,
    DashboardTypesListComponent,
    Error500Component,
    LoadingComponent,
    DashboardFilesListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
