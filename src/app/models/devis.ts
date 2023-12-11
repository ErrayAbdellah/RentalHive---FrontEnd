import { Demande } from "./demande";

export class Devis {
    id : number;
    demande: Demande;
    totalPrix: number;
    commentaire: string;
    approved : boolean;
  
    constructor(demande: Demande, totalPrix: number, commentaire: string, approved : boolean, id : number) {
      this.demande = demande;
      this.totalPrix = totalPrix;
      this.commentaire = commentaire;
      this.approved = approved;
      this.id = id;
    }
  }



  
  

  