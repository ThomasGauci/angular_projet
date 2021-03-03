import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: String;
  public password: String;

  constructor(private router: Router) { 
    this.login = "";
    this.password = "";
  }

  ngOnInit(): void {
  }
  
  connexion(){
    console.log(this.login);
    console.log(this.password);
    this.router.navigate(['acceuil']);
  }
}
