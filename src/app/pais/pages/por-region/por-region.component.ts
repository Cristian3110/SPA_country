import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  regiones: string[] = ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania'];
  paises: Country[] = [];
  regionActiva: string = '';

  constructor(private paisService: PaisService) {}

  //evaluando la clase de Css y enviandola al DOM
  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-outline-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises;
      console.log(paises);
    });
  }
}
