import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "/main",
  },
  {
    path: "main",
    loadComponent: ()=> import("./main/main.component").then(m => m.MainComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
