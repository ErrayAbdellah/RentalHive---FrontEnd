import { Component,OnInit} from '@angular/core';
import { DevisService } from 'src/app/Services/devisService/devis.service';
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {

  DevisList:any[] |undefined;
   ngOnInit(): void {
    this.getAllDevis();
  }
  constructor( private devisService :DevisService){}

  private getAllDevis()
  {
      this.devisService.getDevisList().subscribe(data =>
        {
          this.DevisList = data;
        })
  }
}
