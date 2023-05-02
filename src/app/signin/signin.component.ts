import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/localstorage/user.service';
import { UsersessionService } from '../services/sessionstorage/usersession.service';
import { Iuser } from '../interfaces/user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  constructor(private store:UserService, private session:UsersessionService){}
  ngOnInit(): void {
    
  }
  user : Iuser ={
    id : 0,
    username : "",
    email: "",
    password:""
  }
  disabled = true;

  submitF(){
    this.store.signIn(this.user);
    this.session.createsession(this.user);

  }
}
 
