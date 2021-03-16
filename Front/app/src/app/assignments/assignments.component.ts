import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  fenetre : number = 2;
  dateDeRendu : Date = new Date();
  nomDevoir : string = '';
  auteur : string = '';
  note : number | undefined = undefined;
  matiere : string = ''
  remarque : string = '';

 matieres = [{title:'Anglais',image:'tt'},{title:'Français',image:'teet'}];
 // Une image sera associée à chaque matière et une photo du prof
 assignments: Assignment[] = [
   {
     nom: 'Devoir Angular No1',
     dateDeRendu: new Date('02-20-2021'),
     rendu: false,
     auteur: 'thomas',
     image: 'test',
     note: undefined,
     remarque : 'aucune remarques',
     noter: false,
     detail: false
   },
   {
     nom: 'Devoir WebComponent',
     dateDeRendu: new Date('01-26-2021'),
     rendu: true,
     auteur: 'thomas',
     image: 'test',
     note: 18,
     remarque : 'aucune remarques',
     noter: false,
     detail: false
   },
   {
     nom: 'Devoir TLN Elena Cabrio',
     dateDeRendu: new Date('01-30-2021'),
     rendu: false,
     auteur: 'thomas',
     image: 'test',
     note: undefined,
     remarque : 'aucune remarques',
     noter: false,
     detail: false
   },
 ];
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  changement(fenetre : number){
    this.fenetre = fenetre;
  }

  add(){
    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;
    nouvelAssignment.noter = false;
    nouvelAssignment.detail = false;
    nouvelAssignment.auteur = this.auteur;
    //nouvelAssignment.image = 'image';
    nouvelAssignment.remarque = this.remarque;
    nouvelAssignment.note = this.note;

    this.assignments.push(nouvelAssignment);
    this._snackBar.open("Devoir ajouter", "Fermer", {
      duration: 2000,
    });
  }
}
