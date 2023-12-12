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
  private urlDelete = "http://localhost:8080/api/delete/";
  constructor(private http:HttpClient) {}

  getEquipmentById(id:number):Observable<Equipment>{
    return this.http.get<Equipment>(this.url+id);
  }

  updateEquipment(equipment:Equipment,id:number){
    return this.http.put<Equipment>(this.urlUpdate,equipment)
  }
  deleteEquipment(id: number): Observable<string> {
    return this.http.delete<string>(this.urlDelete + id);
  }
}