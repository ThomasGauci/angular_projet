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

 nomDevoir = '';

 assignments: Assignment[] = [
   {
     nom: 'Devoir Angular No1',
     dateDeRendu: new Date('02-20-2021'),
     rendu: false,
   },
   {
     nom: 'Devoir WebComponent',
     dateDeRendu: new Date('01-26-2021'),
     rendu: true,
   },
   {
     nom: 'Devoir TLN Elena Cabrio',
     dateDeRendu: new Date('01-30-2021'),
     rendu: false,
   },
 ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.log('Bouton cliqué');
    console.log('Nom = ' + this.nomDevoir);
    console.log('Date = ' + this.dateDeRendu);

    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;

    this.assignments.push(nouvelAssignment);

  }

}
