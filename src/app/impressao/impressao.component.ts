import { Component, OnInit } from '@angular/core';

import { DadosService } from '../dados.service'

@Component({
  selector: 'app-impressao',
  templateUrl: './impressao.component.html',
  styleUrls: ['./impressao.component.css']
})
export class ImpressaoComponent implements OnInit {

  nome : string = ''

  svg: Array<any>;
  viewBox: Array<any>;


  constructor(private dadosService: DadosService) { }

  ngOnInit() {
  }

  total() {
    let cidade = this.nome
    console.log(cidade)
    this.listar(cidade)
    this.listar2(cidade)
  }

  listar(cidade) {
    this.dadosService.listar(cidade).subscribe( aux => this.svg = aux[0].st_assvg)
  }

  listar2(cidade) {
    this.dadosService.listar2(cidade).subscribe(aux => this.viewBox = aux[0].getviewbox)
  }

}
