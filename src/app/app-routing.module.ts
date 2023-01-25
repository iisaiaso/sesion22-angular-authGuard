import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])),
    children: [
      { path: '', component: ListProductComponent },
      { path: 'product', component: RegisterProductComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
