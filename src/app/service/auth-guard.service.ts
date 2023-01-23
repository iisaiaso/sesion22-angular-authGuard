import { Injectable, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements OnInit {


  constructor(private auth: Auth) { }

  ngOnInit(): void {

  }
  isRegisterUser({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)

  }
  isLogin({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password)
  }
}
