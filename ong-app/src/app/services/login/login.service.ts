import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const urlLogin: string = 'http://www.mocky.io/v2/5cfd933b3200005e00ccd536';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient,
              private localStorageService: LocalStorageService,
              private router: Router) { }

  autenticacao(request: any): Observable<any> {
    return this.http.post<any>(urlLogin, {
        email: request.email,
        password: request.password,
    });
  }

  logout(): void {
    this.localStorageService.remove('userToken');
    this.router.navigate(['login']);
  }
}
