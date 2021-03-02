import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';



export const ROUTES: Routes = [
  {path : '', component: LoginComponent}
]
