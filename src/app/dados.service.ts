import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  dadosSvg = `http://localhost:3000/getSvg/apodi`
  dadosView = `http://localhost:3000/getViewBox/apodi`

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.dadosSvg}`)
  }

  listar2() {
    return this.http.get<any[]>(`${this.dadosView}`)
  }
}
