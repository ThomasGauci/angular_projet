import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: String;
  public password: String;

  constructor(private router: Router, private authentificationService: AuthentificationService) { 
    this.login = "";
    this.password = "";
  }

  ngOnInit(): void {
  }
  
  connexion(){
    // En attendant : 
    this.router.navigate(['acceuil']);
    this.authentificationService.authentification(this.login,this.password).then(res => {
      console.log("retour servlet ", res);
      if(res == 'oui'){
        this.router.navigate(['acceuil']);
      }
    });
  }
  
}
