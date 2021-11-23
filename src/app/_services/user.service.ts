
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const { priviledge_route } = require('../routes/app-routes')
const API_URL = priviledge_route;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicPriviledge(): Observable<any> {
    return this.http.get(API_URL.public, { responseType: 'text' });
  }

  getUserPriviledge(): Observable<any> {
    return this.http.get(API_URL.user, { responseType: 'text' });
  }

  getAdminPriviledge(): Observable<any> {
    return this.http.get(API_URL.admin, { responseType: 'text' });
  }
}