import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formRegister!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthGuardService, private route:Router) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      email: ['',
        [
          Validators.required
        ]
      ],
      password: ['',
        [
          Validators.required
        ]
      ]
    })
  }

  sendUser() {
    if (this.formRegister.valid) {
      console.log(this.formRegister.value)
      this.authService.isRegisterUser(this.formRegister.value)
        .then(res => {
          console.log(res);
          console.log("Registrado exitosamente");
          this.route.navigate(['login'])
        })
        .catch(error => {
          console.log((error));
        })
    } else {
      console.log('error')
    }
  }
}
