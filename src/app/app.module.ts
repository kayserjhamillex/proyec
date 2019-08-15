import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CitaComponent } from './cita/cita.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CoheaderComponent } from './contactanos/coheader/coheader.component';
import { CobodyComponent } from './contactanos/cobody/cobody.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EheaderComponent } from './especialidad/eheader/eheader.component';
import { EbodyComponent } from './especialidad/ebody/ebody.component';
import { InicioComponent } from './inicio/inicio.component';
import { IheaderComponent } from './inicio/iheader/iheader.component';
import { IbodyComponent } from './inicio/ibody/ibody.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NbodyComponent } from './nosotros/nbody/nbody.component';
import { NheaderComponent } from './nosotros/nheader/nheader.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { SelectespecialidadComponent } from './selectespecialidad/selectespecialidad.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CitaComponent,
    ConsultasComponent,
    ContactanosComponent,
    CoheaderComponent,
    CobodyComponent,
    EspecialidadComponent,
    EheaderComponent,
    EbodyComponent,
    InicioComponent,
    IheaderComponent,
    IbodyComponent,
    NosotrosComponent,
    NbodyComponent,
    NheaderComponent,
    LoginComponent,
    RegistroComponent,
    DateComponent,
    TimeComponent,
    SelectespecialidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
