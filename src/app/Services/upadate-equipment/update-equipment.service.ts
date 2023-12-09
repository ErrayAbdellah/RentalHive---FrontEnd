import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';

@Injectable({
  providedIn: 'root'
})
export class UpdateEquipmentService {
  private url:string = "http://localhost:8080/api/equipment/update";
  constructor(private http:HttpClient) {}

  onInite(){}

  // getEquipmentById():Equipment{
    // return this.http.get() ;
  // }
}
