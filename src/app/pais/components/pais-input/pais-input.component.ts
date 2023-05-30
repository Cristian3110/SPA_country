import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
// operador debounce
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  //eventos
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() {}

  ngOnInit() {
    // realizando el debpuncer emitiendo a los 300milecimas de seg
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
      console.log('debauncer:', valor);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);

    console.log(this.termino);
  }

  teclaPresionada(event: any) {
    //extrayendo del evento
    const valor = event.target.value;
    // console.log(valor);
    // console.log(this.termino);

    this.debouncer.next(this.termino);
  }
}
