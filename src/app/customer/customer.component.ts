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
  public obj={"text-success":true,"bg-info":true,"myclass":true};
  public searchText:string=''
  constructor() {
this.customers=[
{"id":1,"name":"Ajay Singh","age":23,"gender":1,amount:2000,dob:new Date("10-10-1999")},
{"id":2,"name":"Manish Singh","age":35,"gender":1,amount:4000,dob:new Date("10-10-1994")},
{"id":3,"name":"Deepak Singh","age":28,"gender":1,amount:6000,dob:new Date("04-10-1993")},
{"id":4,"name":"Rajani Singh","age":28,"gender":2,amount:8000,dob:new Date("11-10-1998")}

    ]

   }

  ngOnInit(): void {
  }

  public DeleteCustomer(index:number=0) {
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

  
  public class1(){
    return this.obj
  }
  
  public removeClass(){
    this.obj.myclass=false
    this.class1()
  }
  changeByProperty() {
    this.customers[0].name = "Aditya";
}
}
