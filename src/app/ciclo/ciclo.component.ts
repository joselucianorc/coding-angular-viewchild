import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number = 10;

  constructor() {
    console.log("construtor");
    
   }

  ngOnInit(): void {
    console.log("ngInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnDoCheck() {
    console.log("ngOnDoCheck");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy"); 
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  private log(hook: string) {
    console.log(hook);
  }

}
