import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { ApplicationRoutes } from "./app.route";
import { RoutesReuseStrategy } from "./app.routes.reuse-strategy";
import { AppComponent } from './app.component';
import { PrintComponent } from "./print/print.component";
import { StartComponent } from "./start/start.component";
import { PrintService } from "./print.service";

@NgModule({
  declarations: [
    AppComponent,
    PrintComponent,
    StartComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ApplicationRoutes)
    ],
    providers: [
      PrintService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
