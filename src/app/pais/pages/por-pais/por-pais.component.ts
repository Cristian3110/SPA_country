import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;

    //le envio el termino que recibo por argumento al termino de la clase
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        console.log('Error');
        console.info(err);
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    //todo: creara sugerencias
    this.paisService.buscarPais(termino).subscribe(
      (paises) => (
        (this.paisesSugeridos = paises.splice(0, 3)),
        //* pendiente corregir la lectura de captura de error
        (err: any) => (this.paisesSugeridos = [])
      )
    );
    console.log(this.paisesSugeridos);
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
