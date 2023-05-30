import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;

  capitales: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(termino);

    this.paisService.buscarCapital(this.termino).subscribe((capitales) => {
      console.log(capitales);
    });
  }
  sugerencias(termino: string) {
    this.hayError = false;
    //todo:sugerencias
  }
}
