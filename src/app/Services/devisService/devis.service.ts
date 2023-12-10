import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { devis } from 'src/app/models/devis';


@Injectable({
  providedIn: 'root'
})
export class DevisService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }
  getDevisList() :Observable<devis[]>
  {
    return this.httpClient.get<devis[]>(`${this.apiUrl}/devis/all`)
  }
}
