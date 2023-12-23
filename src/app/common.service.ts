import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly url="http://localhost:3000/";
  constructor(private http:HttpClient) { }

  AddUpdateUser(data:any):Observable<any>
}
