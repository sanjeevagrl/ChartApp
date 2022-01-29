import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeLayoutComponent } from "./layouts/home-layout/home-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/home-layout/home-layout.module").then(
            (m) => m.HomeLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
