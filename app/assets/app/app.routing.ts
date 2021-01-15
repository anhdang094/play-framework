/**
 * Created by anh.dang on 11/26/2016.
 */
import { RouterModule, Routes } from "@angular/router"
import HomeComponent from "./component/home.component"

export const routes: Routes = [
  { path: "abc", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: HomeComponent }
]

export const APP_ROUTER_PROVIDERS = [
  RouterModule.forRoot(routes)
]
