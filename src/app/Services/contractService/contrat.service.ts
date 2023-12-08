import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contract } from '../../models/contract';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private baseURL = "http://localhost:8080/api/contract/all";

  constructor(private httpClient: HttpClient) { }

  getContractlist(): Observable<Contract[]>
  {
    return this.httpClient.get<Contract[]>(`${this.baseURL}`);

  }
}
