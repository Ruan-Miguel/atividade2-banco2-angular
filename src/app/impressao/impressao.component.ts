import { Component, OnInit } from '@angular/core';

import { DadosService } from '../dados.service'

@Component({
  selector: 'app-impressao',
  templateUrl: './impressao.component.html',
  styleUrls: ['./impressao.component.css']
})
export class ImpressaoComponent implements OnInit {

  svg: Array<any>;
  viewBox: Array<any>;


  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.listar()
    this.listar2()
  }

  listar() {
    this.dadosService.listar().subscribe( aux => this.svg = aux[0].st_assvg)
  }

  listar2() {
    this.dadosService.listar2().subscribe(aux => this.viewBox = aux[0].getviewbox)
  }

}
