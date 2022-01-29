import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LinebarchartComponent } from "./linebarchart/linebarchart.component";
import { NgChartsModule } from "ng2-charts";
import { BarchartComponent } from "./barchart/barchart.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgChartsModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LinebarchartComponent,
    BarchartComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LinebarchartComponent,
    BarchartComponent,
  ],
})
export class ComponentsModule {}
