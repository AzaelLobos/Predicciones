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

  
  retrocederPagina() {
    this.router.navigate(['/inicio']);
  }
  predecir() {
    //this.router.navigate(['/inicio']);
  }

  imagenesAnimales = [
    { src: 'assets/animales/animal1.jpg', descripcion: 'Un león en la sabana africana.' },
    { src: 'assets/animales/animal2.jpg', descripcion: 'Un perro jugando en el parque.' },
    { src: 'assets/animales/animal3.jpg', descripcion: 'Un gato durmiendo tranquilamente.' },
    // Agregar más imágenes aquí...
  ];

  // Lista de imágenes y descripciones para flores
  imagenesFlores = [
    { src: '../../assets/resources/flowers/Iris Setosa/Iris Setosa Características Taxonómicas familia Iridaceae.jpg', descripcion: 'El Iris Setosa pertenece a la familia Iridaceae y destaca por sus llamativas flores perennes.' },
    { src: '../../assets/resources/flowers/Iris Setosa/Iris Setosa hábitat para insectos y aves.jpg', descripcion: 'El Iris Setosa proporciona un hábitat ideal para diversas especies de insectos y aves en zonas húmedas.' },
    { src: '../../assets/resources/flowers/Iris Setosa/Iris Setosa Hábitat y Distribución', descripcion: 'Se encuentra principalmente en áreas de clima frío y húmedo, como tundras y zonas boreales.' },
    { src: '../../assets/resources/flowers/Iris Setosa/Iris Setosa Morfología y Coloración.jpg', descripcion: 'El Iris Setosa se caracteriza por sus pétalos azulados y una estructura delicada y elegante.' },
    { src: '../../assets/resources/flowers/Iris Setosa/Iris Setosa Usos Tradicionales.jpg', descripcion: 'Tradicionalmente, el Iris Setosa ha sido usado en prácticas medicinales y como planta ornamental.' },
  
    { src: '../../assets/resources/flowers/Iris Versicolour/Iris Versicolou Cuidado y Cultivo.jpg', descripcion: 'El Iris Versicolour requiere suelos húmedos y bien drenados, con exposición moderada al sol.' },
    { src: '../../assets/resources/flowers/Iris Versicolour/Iris Versicolou Habitad.jpg', descripcion: 'El Iris Versicolour habita en pantanos, praderas húmedas y orillas de ríos en América del Norte.' },
    { src: '../../assets/resources/flowers/Iris Versicolour/Iris Versicolou Rol en Restauración Ecológica.jpg', descripcion: 'Es una planta importante para la restauración ecológica, especialmente en zonas húmedas degradadas.' },
    { src: '../../assets/resources/flowers/Iris Versicolour/Iris Versicolou Usos Medicinales.jpg', descripcion: 'El Iris Versicolour se ha utilizado en medicina tradicional para tratar problemas de piel y digestión.' },
    { src: '../../assets/resources/flowers/Iris Versicolour/Iris Versicolour Morfología Floral.jpg', descripcion: 'Presenta una morfología floral única, con pétalos violetas y marcas amarillas distintivas.' },
  
    { src: '../../assets/resources/flowers/Iris Virginica/Iris Virginica Colores y Estética.jpg', descripcion: 'El Iris Virginica es apreciado por sus vibrantes colores, que van desde el púrpura hasta el azul claro.' },
    { src: '../../assets/resources/flowers/Iris Virginica/Iris Virginica Cultivo y Propagación.jpg', descripcion: 'Es una planta fácil de cultivar y propagar, ideal para jardinería en zonas húmedas.' },
    { src: '../../assets/resources/flowers/Iris Virginica/Iris Virginica Distribución y Hábitat.jpg', descripcion: 'Se encuentra comúnmente en humedales y áreas costeras del este de Estados Unidos.' },
    { src: '../../assets/resources/flowers/Iris Virginica/Iris Virginica Importancia Ecológica.jpg', descripcion: 'El Iris Virginica desempeña un papel ecológico vital como fuente de alimento para insectos polinizadores.' },
    { src: '../../assets/resources/flowers/Iris Virginica/Iris Virginica Significado Cultural.jpg', descripcion: 'El Iris Virginica tiene un profundo significado cultural en varias comunidades, representando pureza y belleza.' }
  ];
  

  // Variable para almacenar la imagen y descripción seleccionada aleatoriamente
  imagenSeleccionada: { src: string, descripcion: string } | null = null;

  // Función para mostrar una imagen aleatoria
  mostrarImagenAleatoria() {
    const listaImagenes = this.selectedTab === 'animales' ? this.imagenesAnimales : this.imagenesFlores;
    const indiceAleatorio = Math.floor(Math.random() * listaImagenes.length);
    this.imagenSeleccionada = listaImagenes[indiceAleatorio];
  }

  mostrarPestana(pestana: string): void {
    this.selectedTab = pestana;
    this.mostrarImagenAleatoria(); // Mostrar imagen aleatoria cuando se cambia la pestaña
  }
}
