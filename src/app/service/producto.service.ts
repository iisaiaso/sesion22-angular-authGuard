import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private fireStore: Firestore) { }

  getPoduct(): Observable<Producto[]> {
    const productoRef = collection(this.fireStore, 'productos')
    return collectionData(productoRef,{idField:'id'}) as Observable<Producto[]>
  }
  addProduct(producto:Producto){
    const productoRef = collection(this.fireStore, 'productos')
    return addDoc(productoRef,producto)
  }
  deleteProduct(producto:Producto){
    const productoRef = doc(this.fireStore,'productos/'+producto.id)
    return deleteDoc(productoRef)
  }
}
