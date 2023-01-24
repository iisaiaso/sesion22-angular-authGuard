import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // logeado= false
  constructor(private authServiceLogout: AuthGuardService, private route: Router) { }

  ngOnInit(): void {

  }
  logeado = localStorage.getItem('logeado')
  logoutUser() {
    Swal.fire({
      title: 'Desea cerrar sesion',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log Out!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has cerrado sesion correctamente',
          'success'
        )
        this.authServiceLogout.isLogOut()
        localStorage.removeItem('logeado')
        this.route.navigate(['/login'])
      }
    })

  }

}
