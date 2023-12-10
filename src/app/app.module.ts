import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { HttpClientModule } from '@angular/common/http';
import { ContractComponent } from './components/contract/contract.component';
import { DemandeComponent } from './components/demande/demande.component';
import { DevisComponent } from './components/devis/devis.component';
import { SaveEquipmentComponent } from './components/save-equipment/save-equipment.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { ReservationComponent } from './components/reservation/reservation.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { UpadteEquipmentComponent } from './components/upadate-equipment/upadate-equipment.component';
import { ReservationFormComponent } from './components/reservation/reservation-form/reservation-form.component';
import { ApprovalButtonComponent } from './components/approval-button/approval-button.component';
import { ApprovalModalComponent } from './components/approval-modal/approval-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    EquipmentComponent,
    ContractComponent,
    DemandeComponent,
    DevisComponent,
    SaveEquipmentComponent,
    UpadteEquipmentComponent,
    ReservationComponent,
    ReservationFormComponent,
    ApprovalButtonComponent,
    ApprovalModalComponent,

  ],
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
