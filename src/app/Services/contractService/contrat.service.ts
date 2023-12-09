import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contract } from '../../models/contract';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private baseURL = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getContractlist(): Observable<Contract[]>
  {
    return this.httpClient.get<Contract[]>(`${this.baseURL}/contract/all`);
  }
}
