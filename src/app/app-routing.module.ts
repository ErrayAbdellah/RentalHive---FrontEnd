import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ReservationFormComponent } from './components/reservation/reservation-form/reservation-form.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { DevisComponent } from './components/devis/devis.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'equipments', component: EquipmentComponent },
  { path: 'reservation-form', component: ReservationFormComponent},
  { path: 'reservation', component: ReservationComponent },
  { path: 'devis', component: DevisComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
