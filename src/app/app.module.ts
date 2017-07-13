import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';

// Agregrar rutas que lleven a los componentes
import { Routes, RouterModule } from '@angular/router';
import { SimpletwoComponent } from './simpletwo/simpletwo.component';
import { ColorComponent } from './color/color.component';

import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { ColorPickerModule } from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListaComponent } from './lista/lista.component';
import { DemoComponent } from './demo/demo.component';
import  {DataTableModule,SharedModule } from 'primeng/primeng';

import {MercadolibreService } from './mercadolibre.service';


const appRoutes: Routes = [
  {path: 'simple', component: SimpleComponent, outlet: 'espacio_uno'},
  {path: 'simple2', component: SimpletwoComponent, outlet: 'espacio_dos'},
  {path: 'simple3', component: SimpletwoComponent },
  {path: 'color', component: ColorComponent },
  {path: 'listado', component: ListaComponent },
  {path: 'demo', component: DemoComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    SimpletwoComponent,
    ColorComponent,
    ListaComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    ListboxModule,
    InputMaskModule,
    DataTableModule,
    SharedModule,
    HttpModule
  ],
  providers: [MercadolibreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
