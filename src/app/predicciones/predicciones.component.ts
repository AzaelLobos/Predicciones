import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewEncapsulation } from '@angular/core';  // Imported ViewEncapsulation here
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
@Component({
  selector: 'app-predicciones',
  imports: [AutoCompleteModule,RouterModule, CommonModule, ToggleButtonModule, FormsModule,],
  templateUrl: './predicciones.component.html',
  styleUrls: ['./predicciones.component.css'],  // Corrected styleUrl to styleUrls
  encapsulation: ViewEncapsulation.None  // Added ViewEncapsulation.None
})
export class PrediccionesComponent {
  constructor(private router: Router) {}
  selectedTab: string = 'animales';
 
  dropdownOptionsAnimales = [
    { label: '2', value: 2 },
    { label: '4', value: 4 },
    { label: '6', value: 6 }
  ];

  // Opciones para el select de flores
  dropdownOptionsFlores = [
    { label: '2', value: 2 },
    { label: '4', value: 4 },
    { label: '6', value: 6 }
  ];
  selectedValue: string | null = "";
  selectedValue2: string | null = "";


  
  preguntasAnimales: string[] = [
    '¿Cuál es tu animal favorito?',
    '¿Qué animal consideras más peligroso?',
    '¿Prefieres animales domésticos o salvajes?',
    '¿Qué animal te gustaría tener como mascota?',
    '¿Conoces algún animal en peligro de extinción?',
  ];

  preguntasFlores: string[] = [
    '¿Cuál es tu flor favorita?',
    '¿Sabes el significado de alguna flor?',
    '¿Prefieres flores naturales o artificiales?',
    '¿Has cultivado flores en casa?',
    '¿Qué flor te gustaría regalar?',
    '¿Qué flor te gustaría regalar?',
  ];
  respuestasAnimales: boolean[] = new Array(this.preguntasAnimales.length).fill(false);
  respuestasFlores: boolean[] = new Array(this.preguntasFlores.length).fill(false);

  mostrarPestana(pestana: string): void {
    this.selectedTab = pestana;
  }
  retrocederPagina() {
    this.router.navigate(['/inicio']);
  }
}
