import { HttpParams,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputFieldService {

  constructor(private http:HttpClient) { }

  getCity(data : string){
    const httpParams = new HttpParams({
      fromObject:{
        term : data,
        record : "5",
        sourceId : "1",
      }
    });
   return this.http.get("https://www.carwale.com/api/v2/autocomplete/city/",{params :httpParams})
}
}
