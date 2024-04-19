import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apicaller',
  templateUrl: './apicaller.component.html',
  styleUrls: ['./apicaller.component.css']
})
export class ApicallerComponent implements OnInit {
  data:any
  postofficed:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getdata()

  }
  getdata(){
    this.http.get<any>("https://api.postalpincode.in/pincode/110001")
    .subscribe(res=>{
      if(res.length!=0){
        console.log(res.length);
        this.data=res
        console.log(this.data[0].PostOffice)    
        this.postofficed=  this.data[0].PostOffice
        console.log(this.postofficed)
      }
      else{
        alert("Invalid Details")
      }
    },
      err=>{
        alert("Something Went Wrong!")
      }
    )
  }
}