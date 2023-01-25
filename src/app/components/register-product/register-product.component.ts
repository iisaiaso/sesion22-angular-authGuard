import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  formRegisterProduct!: FormGroup
  constructor(private productService: ProductoService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.formRegisterProduct = this.fb.group({
      name: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      price: ['', [Validators.required]],
      photo: ['', [Validators.required]]
    })
  }

  async saveProduct() {
    if (this.formRegisterProduct.valid) {
      this.productService.addProduct(this.formRegisterProduct.value)
        .then(res => {
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Se ha regitrado correctamente al producto`,
              showConfirmButton: false,
              timer: 1000
            })
            this.route.navigate(['/home'])
          }
        })
        .catch(error => { console.log(error) })

    } else {
      Swal.fire({
        icon: 'warning',
        title: '',
        text: 'Los campos no deben estar vacios!'
      })
    }
  }

}
