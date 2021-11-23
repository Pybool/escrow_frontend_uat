import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { reservationroute } from '../routes/app.routes';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservation } from './../_models/reservation';

const RESERVE_API = reservationroute;


@Injectable({providedIn: 'root'})
export class ReservationService {

  private reservationSubject: BehaviorSubject<Reservation >;
  public reservation: Observable<Reservation>;
  constructor(private http: HttpClient,private router: Router,) 
  {
    this.reservationSubject = new BehaviorSubject<Reservation | any> (null);
    this.reservation = this.reservationSubject.asObservable();
  }
  public publish(reservation:Reservation): Observable<any> {
    const httpOptions_reserve = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+ getToken() })
    };
    // console.log("The published reservation ",reservation)
    return this.http.post(RESERVE_API.publish, {reservation
    }, httpOptions_reserve);
  };

  public loadReservationPool(limit:number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+ getToken() })
    };

    return this.http.get(RESERVE_API.loadOrderPool+`${limit}`, httpOptions);
  }




}


function getToken() { 
  console.log("Punani ",window.sessionStorage.getItem("TOKEN"))
  return window.sessionStorage.getItem("TOKEN");
}

