import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Devis } from 'src/app/models/devis';
import { Observable } from 'rxjs';

interface devisResponse {
    msg : string;
    data : Devis[]
}

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDevis() : Observable<devisResponse>{
    return this.http.get<devisResponse>(`${this.apiUrl}/devis/demandes/0/devis`);
  }

  approveDevis(devis: Devis): Observable<string> {
    const approvalUrl = `${this.apiUrl}/devis/approve/${devis.id}`;
    return this.http.post<string>(approvalUrl, {});
  }

}
