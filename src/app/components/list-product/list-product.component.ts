import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  producto!: Producto[]

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getPoduct().subscribe(Producto => {
      this.producto = Producto
    })

  }

onDeleteProduct(producto:Producto){
  this.productoService.deleteProduct(producto)
}
}
