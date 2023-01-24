import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor (private authServiceLogout: AuthGuardService, private route:Router){}

  ngOnInit(): void {
      
  }

  logoutUser(){
    this.authServiceLogout.isLogOut()
    localStorage.removeItem('logeado')
    this.route.navigate(['/login'])
  }
}
