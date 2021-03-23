import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();
  //Sem o ngModel e sem o Value
  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { 
    this.campoValorInput;
  }

  ngOnInit(): void {
  }

  incrementa() {
    
    this.campoValorInput.nativeElement.value++;
    console.log(this.campoValorInput.nativeElement.value);    
    //console.log(this.campoValorInput);
    //this.valor++;
    this.mudouValor.emit({valor: this.valor});
  }

  decrementa() {
    
    this.campoValorInput.nativeElement.value--;
    console.log(this.campoValorInput.nativeElement.value);
    //console.log(this.campoValorInput);
    //this.valor--;
    this.mudouValor.emit({valor: this.valor});
  }
}
