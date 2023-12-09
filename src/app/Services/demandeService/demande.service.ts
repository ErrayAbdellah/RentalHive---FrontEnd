import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demande } from 'src/app/models/demande';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any[]> {
    const url = `${this.apiUrl}/demandes/all`;
    return this.http.get<any[]>(url);
  }

  createDemande(demande: Demande): Observable<any> {
    const url = `${this.apiUrl}/demandes/create`;
    return this.http.post(url, demande, { responseType: 'text' });
  }  
}
