import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
},
{
  path: 'signin',
  component: SigninComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'addtask',
  component: AddTaskComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
