import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  url ="https://reqres.in/api/login"


  postLogin(data:any){
    return this.http.post(this.url,data)
  }

}
