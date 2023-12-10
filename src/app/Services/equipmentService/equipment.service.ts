import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllEquipment(): Observable<Equipment[]> {
    const url = `${this.apiUrl}/equipment/all`;
    return this.http.get<Equipment[]>(url);
  }

  private selectedEquipmentIds = new BehaviorSubject<number[]>([]);
  selectedEquipmentIds$ = this.selectedEquipmentIds.asObservable();

  setSelectedEquipmentIds(ids: number[]): void {
    this.selectedEquipmentIds.next(ids);
  }
}
