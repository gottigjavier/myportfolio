import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)], 
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes, {urlUpdateStrategy: 'deferred'})],
  // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'ignore'})], //onSameUrlNavigation?: 'reload' | 'ignore'
  //imports: [RouterModule.forRoot(routes, {enableTracing: true})], // Solo para debugging
  exports: [RouterModule]
})
export class AppRoutingModule { }
