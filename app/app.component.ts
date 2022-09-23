import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { SampleService } from './service/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-service';
  constructor(public sample : SampleService){}
  // show : any 
  // plus(){
  //  this.show = this.demo.count++
  // }





}
