import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
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
    this.authentificationService.authentification(this.login,this.password).then(res => {
      if(res == 'oui'){
        this.router.navigate(['acceuil']);
      } else {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Le login ou le mot de passe est faux !',
        })
      }
    });
  }
  
}
