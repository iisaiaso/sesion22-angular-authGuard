import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup

  constructor(private formBuilder: FormBuilder, private authServiceLogin: AuthGuardService, private route:Router) { }
ok!:any
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  sendLogin() {
    if (this.formLogin.valid) {
       this.ok = this.authServiceLogin.isLogin(this.formLogin.value)
       console.log(this.ok)
      if (this.ok) {
        alert("Bienvenido: " + " " + this.formLogin.value.email)
        console.log(this.formLogin.value)
         this.route.navigate(['/home'])
      }else{
        alert("User y pass incorrectos")
      }

    } else {
      alert("Los campos no deben estar vacios")
    }

  }

}
