import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ListProductComponent } from './list-product/list-product.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    RegisterProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    RegisterProductComponent
  ]
})
export class ComponentsModule { }
