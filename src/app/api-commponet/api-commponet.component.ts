import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-api-commponet',
  templateUrl: './api-commponet.component.html',
  styleUrls: ['./api-commponet.component.css']
})
export class ApiCommponetComponent implements OnInit {

  data:any[] = [];
  nombreFiltro: string = '';
  public data1: any[]=[];

  constructor(private apiService: ApiService) { 
    this.data1=[];
  }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data =>{
      this.data=data;
      this.llenartata();
      console.log('', this.data)
    })
  }
  


  llenartata(){
    this.data1 = this.data.map((mane:any)=>{
      const nuevo = {... mane}
      nuevo.name =nuevo.name + 'saul'
      return nuevo;
    }
    )
    console.log('', this.data1)
  }
  
  getEstado(personaje: any): string {
    switch (personaje.status) {
      case 'Alive':
        return 'Vivo';
      case 'Dead':
        return 'Muerto';
      default:
        return 'Desconocido';
    }
  }

  filtrarPorNombre() {
    if (this.nombreFiltro.trim() !== '') {
      this.data = this.data.filter(character => character.name.toLowerCase().includes(this.nombreFiltro.toLowerCase()));
    } else {
      
      this.llenarData();
    }
  }
  



  llenarData1(){
    this.apiService.getData().subscribe(data =>{
      this.data=data;
      console.log(this.data)
    })
  }

}
