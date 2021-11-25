import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestprodComponent } from './admin/gestprod/gestprod.component';
import { AboutComponent } from './client/about/about.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    component: AdminComponent,
    // children: [
    //   {
    //     path: 'gestprod',
    //     component: GestprodComponent,
    //   },
    // ],
  },
  {
    path: 'admin/gestprod',
    component: GestprodComponent,
  },

  {
    path: 'site',
    component: ClientComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
