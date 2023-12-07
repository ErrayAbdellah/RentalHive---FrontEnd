import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EquipmentComponent } from './components/equipment/equipment.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'equipments', component: EquipmentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
