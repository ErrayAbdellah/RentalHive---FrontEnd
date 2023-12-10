import { Demande } from "./demande";
import { State } from "../enums/state";
export interface devis {
 devisId : number,
 demande : Demande,
 approved : boolean,
 devisStatus: State,
 totalPrix : number,
}
