import { Component,OnInit} from '@angular/core';
import { DevisService } from 'src/app/Services/devisService/devis.service';
import { devis } from 'src/app/models/devis';
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {

  DevisList: devis[] |undefined;
   ngOnInit(): void {
    this.getAllDevis();
  }
  constructor( private devisService :DevisService){}

  private getAllDevis() {
    this.devisService.getDevisList().subscribe((data: any) => {
      console.log(data); 

      if (data && data.data && Array.isArray(data.data)) {
        this.DevisList = data.data;
      } else {
        console.error('Invalid data structure received:', data);
      }
    });
  }
}
