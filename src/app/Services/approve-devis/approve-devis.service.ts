import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { condition } from 'src/app/models/conditions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApproveDevisService {

  private baseURL = environment.apiUrl;

  constructor(private http:HttpClient) { }
  approveDevis(devisId:number, conditionDtolist:condition[]): Observable<string>{
  const url = `${this.baseURL}/approve/${devisId}`;
  return this.http.post<string>(url,conditionDtolist);
  }
}
