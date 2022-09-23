import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { catchError, Observable ,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {


  
constructor(private http : HttpClient) { }

 count = 7

 handleError(error:Error){
  return throwError(error || "somthing went wrong")
 }

 getUserDetails(): Observable<any>{
 return this.http.get('http://localhost:7070/user/getUser').pipe(catchError(this.handleError))
 }

}
