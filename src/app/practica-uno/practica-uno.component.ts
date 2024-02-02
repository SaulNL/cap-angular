import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica-uno',
  templateUrl: './practica-uno.component.html',
  styleUrls: ['./practica-uno.component.css']
})
export class PracticaUnoComponent implements OnInit {

  public numero: number;

  constructor() { 
    this.numero = 0;
  }

  ngOnInit(): void {
    this.generarNumeroAleatorio();
  }

  public generarNumeroAleatorio(){
  this.numero = Math.floor(Math.random() * 100) + 1;
  }
}
