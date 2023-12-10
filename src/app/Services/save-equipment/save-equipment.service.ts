import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SaveEquipmentService {
  private apiUrl = environment.apiUrlSave;
  constructor(private http:HttpClient) { }
  
  onSave(equipment:Equipment){
    console.log(equipment);
    return this.http.post("http://localhost:8080/api/equipment/create",equipment);
  }
  
}
