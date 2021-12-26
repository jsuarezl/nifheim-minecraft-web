import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PunishmentsComponent } from './punishments/punishments.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PunishmentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PunishmentsModule {
}
