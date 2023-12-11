import { Equipment } from "./equipment";

export interface Demande {
    userId: number;
    demandeID?: number;
    demandeDate: string;
    dateRetour: string;
    reference?: number;
    priorite: string;
    state: string;
    equipmentIds: number[];
    equipments ?: Equipment[];
}