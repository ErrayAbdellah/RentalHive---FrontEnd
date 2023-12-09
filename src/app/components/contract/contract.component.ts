import { Component,OnInit} from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { ContratService } from 'src/app/Services/contractService/contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit{

  contractTitle : string = "The list of the contracts";
  contracts: any[] | undefined;

  constructor(private contratService :ContratService)
  {
  }
  ngOnInit(): void {
    this.getAllContract();
  }

  private getAllContract()
  {
    this.contratService.getContractlist().subscribe(data=>
      {
        this.contracts = data;


      })
  }


}
