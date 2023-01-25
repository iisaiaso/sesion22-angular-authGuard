import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  formRegisterProduct!: FormGroup
  constructor(private productService: ProductoService, private fb: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.formRegisterProduct = this.fb.group({
      name: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      price: ['', [Validators.required]],
      photo: ['', [Validators.required]]
    })
  }

  saveProduct() {
    this.productService.addProduct(this.formRegisterProduct.value)
    alert("Registrado exitosamente")
    this.route.navigate(['/'])
  }

}
