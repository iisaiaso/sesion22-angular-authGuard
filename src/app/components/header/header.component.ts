import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
    this.authServiceLogout.isLogOut()
    localStorage.removeItem('logeado')
    this.route.navigate(['/login'])
  }

}
