import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path :'acceuil', component: AssignmentsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
