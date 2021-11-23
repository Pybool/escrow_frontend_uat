import { Injectable } from '@angular/core';

const TOKEN = "TOKEN";
const USERID = "USERID";
const USERNAME = "USERNAME";
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.setItem(TOKEN, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN);
  }

  public saveUserid(userID: any): void {
    window.sessionStorage.removeItem(USERID);
    window.sessionStorage.setItem(USERID, JSON.stringify(userID));
  }

  public saveUsername(username: any): void {
    window.sessionStorage.removeItem(USERNAME);
    window.sessionStorage.setItem(USERNAME, JSON.stringify(username));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USERID);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }


}
