import { Component } from '@angular/core';
import { UserService } from '../services/localstorage/user.service';
import { Iuser } from '../interfaces/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
constructor (private store: UserService){}

user: Iuser = {
  id: 0,
  username: "",
  password: "",
  email: ""
}
Register(){
  if(this.user.username == ""){
    alert("username required");
    return;
  }
  if(this.user.password == ""){
    alert("password required");
    return;
  }
  if(this.user.email == ""){
    alert("email required");
    return;
  }
  if(this.user.email.includes('@') == false){
    alert("invalid email");
    return;
  }

  this.store.signUp(this.user);
  window.location.replace("/signin");
}
}
