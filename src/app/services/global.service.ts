import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navStatus:boolean = false
  
  constructor(private _http:HttpClient) { }


  addDoctor(data){
    return this._http.post(`http://localhost:3000/register`, data)
  }

  getAllDoctors(){
    return this._http.get(`http://localhost:3000/alldoctors`)
  }

  getSingleDoctor(id){
    return this._http.get(`http://localhost:3000/singledoc/${id}`)
  }
  // getSingleDoctor(id):Observable<Doctor>{
  //   return this._http.get<Doctor>(`http://localhost:3000/singledoc/${id}`)
  // }

  handleForm(data){
    console.log(data)
    return this._http.post('http://localhost:3000/register', data)
  }
}
