import { Injectable } from '@angular/core';
import { SessionstoreService } from './sessionstore.service';
import { LocalstoreService } from '../localstorage/localstore.service';
import { Iuser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersessionService {

  constructor(private sessionstore: SessionstoreService, private localstore: LocalstoreService) { }
  user: Iuser = {
    id: 0,
    username: "",
    email: "",
    password: ""
  };
  createsession(user: Iuser){
    const getUsersInLocalStorage = this.localstore.get("Users");
    for(const userObject of getUsersInLocalStorage.data){
     
      if (user["email"] === userObject["email"] && user["password"] === userObject["password"]) {
        user["username"] = userObject["username"];
        user["id"] = userObject["id"];
        this.sessionstore.set("loggedUser", user);
      } else {
        continue;
      }
      return;
    }
  }
  getsession(user: Iuser) {
    let userInScope = this.sessionstore.get("loggedUser");
    console.log(userInScope);

    let someValue = {
      id: userInScope.data["id"],
      nameinit: userInScope.data["username"]

    }
    return someValue;
  }
  dltsession(user:Iuser) { 
    this.sessionstore.clear();
    if(this.sessionstore.clear().status === true){
      window.location.replace("/signin");
    }
    else{
      return;
    }
  }
}
