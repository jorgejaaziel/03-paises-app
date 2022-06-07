import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  paises: Country[] = []
  termino: string = '';
  hayError: boolean = false;

  constructor( private paisService: PaisService) { }

  ngOnInit(): void { }

  buscar(termino: string) {
    this.hayError=false;
    this.termino=termino;
    console.log(this.termino)
    this.paisService.buscarPais(this.termino).subscribe( paises => {

      this.paises = paises;

    }, (error) => {
      this.hayError = true;
      this.paises = []
    });
  }

}
