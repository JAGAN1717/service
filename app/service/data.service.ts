import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  count = 0
  constructor(private http : HttpClient) { }

  handleError(error:Error){
    return throwError(error || "somthing went wrong")
  }

  getdetails(): Observable<any>{
   return this.http.get('http://localhost:7070/user/getUser').pipe(catchError(this.handleError))
  }
}

