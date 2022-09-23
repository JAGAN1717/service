import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  constructor(public demo : DataService ) { }

  print : any = this.demo.count

  userData :any

  incre(){
    this.demo.count++
  }

  increase(){
   this.demo.getdetails().subscribe(res=>{
    console.log(res)
    this.userData = res.result
   })
  
  }
  ngOnInit(): void {
   
  }

}
