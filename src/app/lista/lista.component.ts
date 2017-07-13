import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
 cities: SelectItem[];

    personaSeleccionada: string;
    personas: SelectItem[];

    constructor() {
        this.personas = [];
        this.personas.push({label:'Steven Sierra', value:'Steven Sierra'});
        this.personas.push({label:'Abby Sierra', value:'Abby Sierra'});
        this.personas.push({label:'Foo Bar', value:'Foo Bar'});
        
    }
  

  ngOnInit() {
  }

}
