import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import Swal from 'sweetalert2';

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
          console.log(res)
          if(res){
            
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Se ha regitrado correctamente`,
              showConfirmButton: false,
              timer: 1000
            })
          this.route.navigate(['/login']) 
          }
        })
        .catch(error => {
          console.log((error));
        })
    } else {
      Swal.fire({
        icon: 'warning',
        title: '',
        text: 'Los campos no deben estar vacios!'
      })
    }
  }
}
