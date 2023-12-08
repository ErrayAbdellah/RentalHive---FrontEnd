import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ContractComponent } from './components/contract/contract.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'equipments', component: EquipmentComponent },
  { path: 'contracts', component: ContractComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
