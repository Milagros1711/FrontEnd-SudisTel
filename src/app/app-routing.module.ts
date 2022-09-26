
import { RoomsComponent } from './pages/rooms/rooms.component';
import { AllHotelsBuscarComponent } from './pages/all-hotels/all-hotels-buscar/all-hotels-buscar.component';
import { AllHotelsComponent } from './pages/all-hotels/all-hotels.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';
import { EmployeersBuscarComponent } from './pages/employeers/employeers-buscar/employeers-buscar.component';
import { HotelTasksCrearComponent } from './pages/hotel-tasks/hotel-tasks-crear/hotel-tasks-crear.component';
import { EmployeersCrearComponent } from './pages/employeers/employeers-crear/employeers-crear.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { HotelTasksComponent } from './pages/hotel-tasks/hotel-tasks.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeersComponent } from './pages/employeers/employeers.component';

import { MyHotelComponent } from './pages/my-hotel/my-hotel.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ResourcesCrearComponent } from './pages/resources/resources-crear/resources-crear.component';
import { PrincipalTuristComponent } from './pages/principal-turist/principal-turist.component';
import { ReservationsTuristsComponent } from './pages/reservations-turists/reservations-turists.component';


const routes: Routes = [
  {path: '', component: UserTypeComponent},
  {path: 'principal-owner', component: PrincipalComponent},
  {path: 'my-hotel', component: MyHotelComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'employeers', component: EmployeersComponent, children:[
    { path: 'nuevo', component: EmployeersCrearComponent },
    { path: 'edicion/:id', component: EmployeersCrearComponent },
    { path: 'buscar/:id', component: EmployeersBuscarComponent }
  ]},
  {path: 'resources', component: ResourcesComponent},
  {path: 'add-resource', component: ResourcesCrearComponent},
  {path: 'hotel-tasks', component: HotelTasksComponent},
  {path: 'rooms', component: RoomsComponent},
{path: 'reservations-turists', component: ReservationsTuristsComponent},
  {path: 'add-task', component: HotelTasksCrearComponent},
  {path: 'add-employer', component:EmployeersCrearComponent},
  { path: 'principal-turist', component: PrincipalTuristComponent },
  
  {path: 'all-hotels', component: AllHotelsComponent, children:[
    { path: 'buscar/:id', component: AllHotelsBuscarComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }