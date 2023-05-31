import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    //with operators SwitchMap
    this.activedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)))

      .subscribe((resp) => {
        console.log(resp);
      });
    // utilizando el operador SwitchMap
    // inicialilzando el component
    // desestructurando los params extrayendo el Id
    // this.activedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService.getPaisPorAlpha(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
