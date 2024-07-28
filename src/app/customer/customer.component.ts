import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public message:string="Hello Message !"
  public isadmin:number=1
  public customers:any
  constructor() {
this.customers=[
{"id":1,"name":"Ajay Singh","age":23,"gender":"male"},
{"id":2,"name":"Manish Singh","age":35,"gender":"male"},
{"id":3,"name":"Deepak Singh","age":28,"gender":"male"}
    ]

   }

  ngOnInit(): void {
  }

  public DeleteCustomer(index:number) {
    this.customers.splice(index,1)
  }
  public Color1(){
    let obj={"color":"red","background":"yellow"}
    return obj
  }

  public Color2(){
    let obj={"color":"green","background":"gray"}
    return obj
  }
}
