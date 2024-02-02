import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import {random} from 'lodash';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public usuario: Array<string>;
  public bandera: boolean;
  public anno: number;
  public siglo: number;
  public valoresTransformados: number[] = [];
  

  public diasSeleccionados: any;
  
  public diasSemanas: any = [
    {dia: 'todos los  Lunes', diaSolo: 'Lunes'},
    {dia: 'todos los Martes', diaSolo: 'Martes'},
    {dia: 'todos los Miercoles', diaSolo: 'Miercoles'},
    {dia: 'todos los Jueves', diaSolo: 'Jueves'},
    {dia: 'todos los Viernes', diaSolo: 'Viernes'},
    {dia: 'todos los Sabado', diaSolo: 'Sabado'},
    {dia: 'todos los Domingo', diaSolo: 'Domingo'},
  ];
  public  arrayAux =[];

  constructor() {
    this.usuario = ['Marcos', '22', '7561146892', 'marcos@gmail.com'];
    this.nombre = '';
    this.apellido = '';
    this.bandera = false;
    this.anno = 0;
    this.siglo = 0;
    this.arrayAux=[];
    
  }


  ngOnInit(): void {
    this.nombre = 'Marcos Sánchez';
    this.apellido = 'Sánchez';
    this.bandera = true;
    this.funcion1();
    this.map();
    let numeros = of(1, 2, 3, 4, 5);
    let dobles = numeros.pipe(map(valor => valor * 2));

    dobles.subscribe(valor => {
      this.valoresTransformados.push(valor); });

    

    console.log(this.diasSemanas);
  }


  public cambiarNombre() {
    this.nombre = 'Andrea';
    this.nombre = this.nombre + ' ' + this.apellido;
    this.bandera = true;
    console.log('hola ' + this.nombre);
  }

  public funcion1(){
    let contador: number =0;
    let acumular: number =0;
    
    this.diasSemanas.forEach((elemento: any) =>{
      contador ++
      acumular += contador 
      elemento.id = acumular

     // console.log((contador++) + ' ' + elemento.dia);
    });
  }

  public funcion2(){
    this.arrayAux = this.diasSemanas.map((dia: any)=> {
      const nuevoDia = {...dia};
      nuevoDia.id2 = random(1,10);
      return nuevoDia;
    });
    console.log('bcjvf', this.arrayAux);
  }





  public mostrarArreglo(){
    console.log('alv',this.diasSemanas);
  }

  public nostrarsiglo() {  
    // Verifica si se ha ingresado un año
    if (this.anno && this.anno > 0) {
      // Calcula el siglo
      this.siglo = Math.ceil(this.anno / 100);
    } else {
      this.siglo = 0;
    }
  }

  public map(){
    let numeros = of(1, 2, 3, 4, 5);
    let dobles = numeros.pipe(map(valor => valor * 2));
   dobles.subscribe(valor => console.log(valor));
  }


  }


