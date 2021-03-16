
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
  remarque : string = '';
  matiere : string = '';
  imgcours : string ='';
  imgprof : string ='';

 matieres = [{title:'Analyse des sentiments',imagecours:'/assets/matieres/analysesentiment.jpg', imageprof : '/assets/prof/Villata.jpg'}
,{title:'Gestion de projet',imagecours:'/assets/matieres/gestondeprojet.jpg', imageprof : '/assets/prof/Michel-Winter.jpg'}
,{title:'Recherche d\'informations',imagecours:'/assets/matieres/rechercheinfo.jpg', imageprof : '/assets/prof/Elena-Cabrio.jpg'}
,{title:'Web',imagecours:'/assets/matieres/web.jpg', imageprof : '/assets/prof/Michel-Buffa.jpg'}
,{title:'Simulation de gestion',imagecours:'/assets/matieres/simulationgestion.jpg', imageprof : '/assets/prof/Stéphane-Tounsi.jpg'}];


 assignments: Assignment[] = [
   {
     nom: 'Devoir Angular No1',
     titre :'Simulation de gestion',
     dateDeRendu: new Date('02-20-2021'),
     rendu: false,
     auteur: 'thomas',
     remarque : 'aucune remarques',
     noter: false,
     detail: false
   },
   {
     nom: 'Devoir WebComponent',
     titre :'web',
     dateDeRendu: new Date('01-26-2021'),
     rendu: true,
     auteur: 'thomas',
     note: 18,
     remarque : 'aucune remarques',
     noter: false,
     detail: false
   },
   {
     nom: 'Devoir TLN Elena Cabrio',
     titre :'web',
     dateDeRendu: new Date('01-30-2021'),
     rendu: false,
     auteur: 'thomas',
     note: undefined,
     remarque : 'aucune remarques',
     noter: false,
     detail: false
   },
 ];
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let _ = this
    this.assignments = this.assignments.map((a : Assignment) => {
      a.matiere = _.matieres.find((m:any)=> a.titre.toLocaleLowerCase().trim()=== m.title.toLocaleLowerCase().trim())    
      return a;
    });
  }

  changement(fenetre : number){
    this.fenetre = fenetre;
  }


  add(){
    let nouvelAssignment : Assignment = {
    titre : this.matiere,
    nom : this.nomDevoir,
    dateDeRendu : this.dateDeRendu,
    rendu : false,
    noter : false,
    detail : false,
    auteur : this.auteur,
    remarque : this.remarque,
    note : this.note,
    };
    this.assignments.push(nouvelAssignment);
    this._snackBar.open("Devoir ajouter", "Fermer", {
      duration: 2000,
    });
  } 
}
