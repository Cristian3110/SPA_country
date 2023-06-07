import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'europe', 'asia', 'oceania'];
  regionActiva: string = '';

  constructor() {}

  //evaluando la clase de Css y enviandola al DOM
  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-outline-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
  }
}
