import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';

@Injectable({
  providedIn: 'root'
})
export class UpdateEquipmentService {
  private url:string = "http://localhost:8080/api/equipment/equipment/";
  private urlUpdate = "http://localhost:8080/api/equipment/";
  constructor(private http:HttpClient) {}

  getEquipmentById():Observable<Equipment>{
    return this.http.get<Equipment>(this.url+4);
  }

  updateEquipment(equipment:Equipment){
    return this.http.put<Equipment>(this.urlUpdate+4,equipment)
  }
}