import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { HttpClientModule } from '@angular/common/http';
// import { ReservationComponent } from './reservation/reservation/reservation.component';
import { SaveEquipmentComponent } from './components/save-equipment/save-equipment.component';
// import { FormsModule } from '@angular/forms';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';
import { ReservationFormComponent } from './components/reservation/reservation-form/reservation-form.component';
import { FormsModule } from '@angular/forms';
import { UpadteEquipmentComponent } from './components/upadate-equipment/upadate-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    EquipmentComponent,
    ReservationComponent,
    SaveEquipmentComponent,
    ReservationFormComponent,
    UpadteEquipmentComponent,
  ],
  imports: [
  [BrowserModule, FormsModule],
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
