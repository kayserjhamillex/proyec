import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CitaComponent } from './cita/cita.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { ConsultasComponent } from './consultas/consultas.component';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'cita', component: CitaComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'especialidad', component: EspecialidadComponent},
  { path: 'consultas', component: ConsultasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
