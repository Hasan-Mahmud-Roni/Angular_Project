import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City, LoginRequest, LoginResult } from '../models/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl:string = ' http://localhost:40080'; 

  constructor(private http: HttpClient,private router:Router) { }

  login(loginRequest: LoginRequest): Observable<LoginResult> {
    const loginUrl = `${this.apiUrl}/api/Account/Login`; 
    return this.http.post<LoginResult>(loginUrl, loginRequest);
  }

  createCity(city: City): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.apiUrl, city, httpOptions);
  }

  updateCity(city: City): Observable<City> {
    const url = `${this.apiUrl}/${city.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<City>(url, city, httpOptions);
  }

  deleteCity(cityId: number): Observable<any> {
    const url = `${this.apiUrl}/${cityId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<any>(url, httpOptions);
  }

  addUsername(username:string){
    localStorage.setItem('username',username);
  }
  addAccessToken(accessToken:string){
    localStorage.setItem('accessToken',accessToken);
  }
  addRefreshToken(refToken:string){
    localStorage.setItem('refreshToken',refToken);
  }
  getAccessToken(){
    return localStorage.getItem('accessToken');
  }
  getUsername(){
    return localStorage.getItem('username');
  }
  getRefreshToken(){
    return localStorage.getItem('refreshToken');
  }
  isLoggedIn(){
    return !!this.getAccessToken() && !this.isTokenExpired()
  }
  isTokenExpired(){
    const token: string=this.getAccessToken()??"";
        if(!token)
          return false;
        const tokenSplit:string=token.split('.')[1];
        const decodedString:string=atob(tokenSplit);
        const jsonString=JSON.parse(decodedString);
        const expiry = (jsonString).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      this.router.navigate(['/login']);
    }

}
