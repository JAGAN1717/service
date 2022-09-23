import { Component, OnInit } from '@angular/core';
import { SampleService } from '../service/sample.service';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  //providers : [SampleService]
})
export class SampleComponent implements OnInit {
  
  constructor(public sample : SampleService) { }

  data = this.sample.count

  increase(){
    this.sample.count ++
  }

  userDetails : any

 getUers(){
  this.sample.getUserDetails().subscribe(res=>{
    console.log("res",res)
    this.userDetails = res.result
  })
 }  
  ngOnInit(): void {
  }

}
