import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
 // champs de formulaire
 ajoutActive = true;
 dateDeRendu = new Date();
  affichage = 1
 nomDevoir = '';
 auteur = '';
 note = null;
 remarque = '';
 image = '';
 renduVis = true;

 assignments: Assignment[] = [
   {
     nom: 'Devoir Angular No1',
     dateDeRendu: new Date('02-20-2021'),
     rendu: false,
     auteur: 'thomas',
     image: 'test',
     note: undefined,
     remarque : 'aucune remarques'
   },
   {
     nom: 'Devoir WebComponent',
     dateDeRendu: new Date('01-26-2021'),
     rendu: true,
     auteur: 'thomas',
     image: 'test',
     note: 18,
     remarque : 'aucune remarques'
   },
   {
     nom: 'Devoir TLN Elena Cabrio',
     dateDeRendu: new Date('01-30-2021'),
     rendu: false,
     auteur: 'thomas',
     image: 'test',
     note: 18,
     remarque : 'aucune remarques'
   },
 ];
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    console.log('Bouton cliqué');
    console.log('Nom = ' + this.nomDevoir);
    console.log('Date = ' + this.dateDeRendu);

    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;
    nouvelAssignment.auteur = 'test';
    nouvelAssignment.image = 'image';
    nouvelAssignment.remarque = 'remarque';

    this.assignments.push(nouvelAssignment);
  }

  renduVisible(event: {preventDefault: () => void;}) {
    event.preventDefault();
    console.log(this.renduVis);
    this.renduVis = !this.renduVis ;
  }

}
