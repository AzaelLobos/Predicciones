import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-predicciones',
  imports: [RouterModule],
  templateUrl: './predicciones.component.html',
  styleUrl: './predicciones.component.css'
})
export class PrediccionesComponent {
  constructor(private router: Router) {}

  retrocederPagina() {
    this.router.navigate(['/inicio']);
  }
  
}
