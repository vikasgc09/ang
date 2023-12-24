import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly url="http://localhost:3000/crud/";
  constructor(private http:HttpClient) { }

  AddUpdateUser(crud:any): void {
    console.log(crud);
     this.http.post<any>(this.url,crud);
  }
}
