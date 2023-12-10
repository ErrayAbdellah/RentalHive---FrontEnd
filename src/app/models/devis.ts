import { Demande } from "./demande";
import { State } from "../enums/state";
import { condition } from "./conditions";

export interface devis {
  devisId: number;
  demande: Demande;
  approved: boolean;
  devisStatus: State;
  totalPrix: number;
  conditions : condition[]
}
