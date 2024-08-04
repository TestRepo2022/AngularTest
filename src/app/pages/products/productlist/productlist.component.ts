import { Component, OnInit } from '@angular/core';
import { Productlist } from './productlist';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  Products:any=[];
  constructor(private ActiveRoute:ActivatedRoute) {
    this.Products=Productlist
   }

   ngOnInit() {
    this.ActiveRoute.params.subscribe((param)=>{
     //console.log(param["id"]) 
     let id=param["id"];
     this.Products=Productlist.filter((prod)=>{
       return prod.catid==id;
     })
    })
  }

}
