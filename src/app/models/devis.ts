import { Demande } from "./demande";

export class Devis {
    demande: Demande;
    totalPrix: number;
    commentaire: string;
  
    constructor(demande: Demande, totalPrix: number, commentaire: string) {
      this.demande = demande;
      this.totalPrix = totalPrix;
      this.commentaire = commentaire;
    }
  }



  
  

  