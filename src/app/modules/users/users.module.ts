import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactosComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
  exports: [NavbarComponent, FooterComponent],
})
export class UsersModule {}
