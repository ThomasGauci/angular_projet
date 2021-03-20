
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssignementService } from '../assignementService/assignement.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})



export class AssignmentsComponent implements OnInit {
  fenetre : number = 1;
  dateDeRendu : Date = new Date();
  nomDevoir : string = '';
  auteur : string = '';
  note : string = '';
  remarque : string = '';
  matiere : string = '';
  imgcours : string ='';
  imgprof : string ='';
  assignments: Array<Assignment> = [];
 matieres = [{title:'Analyse des sentiments',imagecours:'/assets/matieres/analysesentiment.jpg', imageprof : '/assets/prof/Serena-Villata.jpg'}
,{title:'Gestion de projet',imagecours:'/assets/matieres/gestiondeprojet.jpg', imageprof : '/assets/prof/Michel-Winter.jpg'}
,{title:'Recherche d\'informations',imagecours:'/assets/matieres/rechercheinfo.jpg', imageprof : '/assets/prof/Elena-Cabrio.jpg'}
,{title:'Web',imagecours:'/assets/matieres/web.jpg', imageprof : '/assets/prof/Michel-Buffa.jpg'}
,{title:'Simulation de gestion',imagecours:'/assets/matieres/simulationgestion.jpg', imageprof : '/assets/prof/Stéphane-Tounsi.jpg'}];

/*
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
 ];*/
  constructor(private _snackBar: MatSnackBar, private assignementService: AssignementService) { }

  ngOnInit(): void {
    // let _ = this
    // this.assignments = this.assignments.map((a : Assignment) => {
    //   console.log(a.matiere)
    //   a.matiere = _.matieres.find((m:any)=> a.titre.toLocaleLowerCase().trim()=== m.title.toLocaleLowerCase().trim())    
    //   console.log(a.titre)
    //   return a;
    // });

    this.loadAssignement();
  }

  changement(fenetre : number){
    this.fenetre = fenetre;
  }

  loadAssignement(){
    this.assignementService.get().then(async res => {
      this.assignments = (await res);
      this.imgtocompenent();
    })
  }

  add(){
    let nouvelAssignment : Assignment = {
    titre : this.matiere,
    nom : this.nomDevoir,
    dateDeRendu :  this.dateDeRendu,
    rendu : false,
    noter : false,
    detail : false,
    auteur : this.auteur,
    remarque : this.remarque,
    note : this.note,
    };
    if(this.note != ''){
      nouvelAssignment.rendu = true;
      nouvelAssignment.noter = true;
    }
    this.assignments.push(nouvelAssignment);
    
    this.imgtocompenent();
    this.assignementService.add(nouvelAssignment.titre,nouvelAssignment.nom,nouvelAssignment.dateDeRendu,nouvelAssignment.rendu,nouvelAssignment.noter,nouvelAssignment.detail,nouvelAssignment.auteur,nouvelAssignment.remarque,nouvelAssignment.note).then( res => {
      if(res == "oui"){
        this._snackBar.open("Devoir ajouter", "Fermer", {
          duration: 2000,
        });
      } else {
        this._snackBar.open("Erreur lors de l'ajout du devoir", "Fermer", {
          duration: 2000,
        });
      }
    });
  } 


  imgtocompenent(){
    let _ = this
    this.assignments = this.assignments.map((a : Assignment) => {
      console.log(a.matiere)
      a.matiere = _.matieres.find((m:any)=> a.titre.toLocaleLowerCase().trim()=== m.title.toLocaleLowerCase().trim())    
      console.log(a.titre)
      return a;
    });
  }

  delete(element : Assignment){
    console.log("delete")
    this.assignementService.delete(element.titre,element.nom,element.dateDeRendu,element.rendu,element.noter,element.detail,element.auteur,element.remarque,element.note).then( res => {
      if(res == "oui"){
        this.assignments.splice(this.assignments.indexOf(element),1);
        this._snackBar.open("Devoir supprimé", "Fermer", {
          duration: 2000,
        });
      } else {
        this._snackBar.open("Erreur lors de la suppression du devoir", "Fermer", {
          duration: 2000,
        });
      }
    });
  }

  update(element : Assignment, note : string){
    console.log("update", note)
    this.assignementService.update(element.titre,element.nom,element.dateDeRendu,true,true,element.detail,element.auteur,element.remarque,note).then( res => {
      if(res == "oui"){
        this._snackBar.open("Devoir mis à jour", "Fermer", {
          duration: 2000,
        });
      } else {
        this._snackBar.open("Erreur lors de la maj du devoir", "Fermer", {
          duration: 2000,
        });
      }
    });
  }
  getAssignementRenduFiltrer(){
    return this.assignments.filter((a) => a.rendu);
  }

  getAssignementNonRenduFiltrer(){
    return this.assignments.filter((a) => !a.rendu);
  }
}
