import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PrediccionesComponent } from './predicciones/predicciones.component';
import { InformacionComponent } from './informacion/informacion.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo: "inicio",
        pathMatch:"full"
    },
    {
        path:"inicio",
        component: InicioComponent,
    },
    {
        path:"predicciones",
        component:PrediccionesComponent,
    },
    {
        path:"informacion",
        component:InformacionComponent,
    }
];
