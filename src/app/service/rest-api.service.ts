import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import * as constants from  '../shared/constants';
import { PetOwner } from '../model/pet-owner';
import { Pet } from '../model/pet';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  constructor(private http: HttpClient) { }



  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAglDeveloperTestApi(): Observable<PetOwner> {
    return this.http.get<PetOwner>(constants.AGL_API_URL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // getAglDeveloperTestApi2(): Observable<PetOwner> {
  //   return this.http.get<PetOwner>(this.apiURL)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }


  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}