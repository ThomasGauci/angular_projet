import { Matiere } from './matiere.model';
export class Assignment {
  nom : string | undefined;
  titre!: string;
  dateDeRendu: Date | undefined;
  rendu?: boolean;
  auteur: string | undefined;
  note?: string ;
  remarque : string | undefined;
  noter!: Boolean;
  detail!: Boolean;
  matiere? : Matiere

  
}
