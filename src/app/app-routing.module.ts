import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ReservationFormComponent } from './components/reservation/reservation-form/reservation-form.component';
import { UpadteEquipmentComponent } from './components/upadate-equipment/upadate-equipment.component';
import { SaveEquipmentComponent } from './components/save-equipment/save-equipment.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'equipments', component: EquipmentComponent },
  { path: "save-equipment", component: SaveEquipmentComponent },
  { path: 'reservation-form', component: ReservationFormComponent},
  { path: "update-equipment/:id", component: UpadteEquipmentComponent },
  { path: "update-equipment/:id", component: UpadteEquipmentComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
