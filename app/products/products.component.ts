import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
 products = [
  {id:1,name: 'analog watch', price:'$109',color:'black',available:'Available',image:'/assets/image1.jpg' },
  {id:1,name: 'Ultra HD Tv', price:'$3339',color:'black',available:'Available',image:'/assets/image2.jpg' },
  {id:1,name: 'APPLE iphone', price:'$1855',color:'black',available:'Not Available',image:'/assets/image3.jpg' },
  {id:1,name: 'LG Washing Machine', price:'$1765',color:'black',available:'Available',image:'/assets/image4.jpg' },
  {id:1,name: 'LG Refrigerator', price:'$2815',color:'black',available:'Not Available',image:'/assets/image5.jpg' },
  {id:1,name: 'Dell laptop', price:'$2145',color:'black',available:'Available',image:'/assets/image6.jpg' },
 ];

}
