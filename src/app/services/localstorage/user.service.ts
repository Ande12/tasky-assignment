import { Injectable } from '@angular/core';
import { LocalstoreService } from './localstore.service';
import { BooleanConstants } from 'src/app/constants/booleanconstant.enum';
import { Iuser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localstoreService: LocalstoreService ) {}
  booleans = new BooleanConstants();

  signIn(user: Iuser){
    const getUsersInLocalStorage = this.localstoreService.get("Users");
    let loginStatus;
    for(const userObject of getUsersInLocalStorage.data){
          if(user["email"] === userObject["email"] && user["password"] === userObject["password"]){ 
            alert(`${userObject["username"]} logged in`);
            window.location.replace("");
            return;
          } else {
            continue;
          }
          return;
    }
    alert(`password or email do not match`);
  }
  signUp(user:Iuser){
    const getUsersInLocalStorage = this.localstoreService.get("Users");
    let usersInLocalStorage: Object[] = [];
    if (getUsersInLocalStorage.status === true) {
      usersInLocalStorage = getUsersInLocalStorage.data;
    }
    for(const users of usersInLocalStorage){
      if(user.username === users["username" as keyof object]){
        alert("User already exist");
        return;
      }
      if(user.email === users["email" as keyof object]){
        alert("User exist");
        return;
      }else{}
    }
    let arrLength:number = usersInLocalStorage.length;
    let lastUser = usersInLocalStorage[arrLength-1];
    if(arrLength === 0){
      user["id"] += 1;
    } else if(arrLength>=1){
      user["id"] = lastUser["id" as keyof object]+1;
    }
    usersInLocalStorage.push(user);
    this.localstoreService.set("Users", usersInLocalStorage);
    return;
  }
}
