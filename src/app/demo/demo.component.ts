import { Component, OnInit } from '@angular/core';
import {InputMaskModule} from 'primeng/primeng';
import { MercadolibreService } from '../mercadolibre.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
  productos:Producto[];
  tituloOculto = false;
  botonDeshabilitado=false;

  constructor(private mercadolibre:MercadolibreService) { }

  ngOnInit() {
    this.traerProductos();
  }

  traerProductos(): void{
    this.mercadolibre.traerIpod("test").then(productos => this.productos = productos); // arrow functions
  }
  buscar(producto:string){
    this.mercadolibre.traerProductos(producto).then(productos => this.productos = productos); // arrow functions
  }

  deshabilitarOcultar():void{

    this.botonDeshabilitado = !this.botonDeshabilitado;
  }

  ocultarTitulo():void{

    this.tituloOculto = !this.tituloOculto;
    
  }

}
