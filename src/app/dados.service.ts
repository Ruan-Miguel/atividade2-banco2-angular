import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  dadosSvg = `http://localhost:3000/getSvg/`
  dadosView = `http://localhost:3000/getViewBox/`

  constructor(private http: HttpClient) { }

  listar(cidade) {
    console.log(this.dadosSvg + cidade)
    return this.http.get<any[]>(`${this.dadosSvg + cidade}`)
  }

  listar2(cidade) {
    return this.http.get<any[]>(`${this.dadosView + cidade}`)
  }
}
