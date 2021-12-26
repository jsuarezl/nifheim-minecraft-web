import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
