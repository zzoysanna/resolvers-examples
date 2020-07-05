import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: './+examples#ExamplesModule'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  })],
  exports: [RouterModule],
})
export class AppRouting {
}
