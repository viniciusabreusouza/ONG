import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


const urlServicos = 'http://www.mocky.io/v2/5cfe50e23200004f0045effc';
const urlCadastrarServico  = 'http://www.mocky.io/v2/5cfe52103200004f0045f007';
const urlServicosLocal  = 'http://localhost:8080/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(protected http: HttpClient,
              private router: Router) { }

  buscarServicos(): Observable<any> {
    return this.http.get<any>(urlServicos);

    //return this.http.get<any>(urlServicosLocal + '/lista-servicos/');
  }

  cadastrarServicos(servicoRequest: any): Observable<any> {
    return this.http.get<any>(urlCadastrarServico);

    //return this.http.post<any>(urlServicosLocal + '/cadastrar-servico', servicoRequest);
  }
}
