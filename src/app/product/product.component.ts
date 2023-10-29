import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  //Property Binding
  isNotAvailable: boolean = false

  source: string = '../../assets/images.jfif'
  width = 864
  height = 540

  products: Product[] = [
    { id: 1001, productName: "Samsung S22", price: 25000, rating: 4.5, addedDate: new Date(2023, 3, 12) },
    { id: 1002, productName: "IPhone 12", price: 70000, rating: 4.5, addedDate: new Date(2019, 1, 12) },
    { id: 1003, productName: "Xiomi 12 Pro", price: 50000, rating: 5, addedDate: new Date(2020, 7, 4) },
    { id: 1004, productName: "Realme GT", price: 25000, rating: 4.5, addedDate: new Date(2023, 7, 12) },
    { id: 1005, productName: "samsung M21", price: 30000, rating: 5, addedDate: new Date(2022, 1, 12) },
  ]

  userData : any[] = [
    { name : "Praven" , gender : "M"},
    { name : "Sanjeev" , gender : "M"},
    { name : "Kayal" , gender : "F"},
    { name : "Nandhani" , gender : "F"},
  ]
  
}
