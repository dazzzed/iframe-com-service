import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PrintComponent } from "./print/print.component";
import { StartComponent } from "./start/start.component";

export const ApplicationRoutes: Routes = [
    { path: "", component: StartComponent },
    { path: "print", component: PrintComponent }
];
