import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PunishmentsComponent } from './punishments/punishments/punishments.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'punishments', component: PunishmentsComponent},
  {path: 'map', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
