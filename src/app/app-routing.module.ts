import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ContractComponent } from './components/contract/contract.component';
import { ReservationFormComponent } from './components/reservation/reservation-form/reservation-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'equipments', component: EquipmentComponent },
  { path: 'contracts', component: ContractComponent },

  { path: 'reservation-form', component: ReservationFormComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
