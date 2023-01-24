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

  constructor(private formBuilder: FormBuilder, private authServiceLogin: AuthGuardService, private route: Router) { }
  ok!: any
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  sendLogin() {
    if (this.formLogin.valid) {
      this.authServiceLogin.isLogin(this.formLogin.value)
        .then(res => {
          if (res) {
            alert("Bienvenido: " + " " + this.formLogin.value.email)
            this.route.navigate(['/home'])
          }else{
            console.log("error");
          }
        })
        .catch(error => { console.log(error) })
    } else {
      alert("Los campos no deben estar vacios")
    }

  }

}
