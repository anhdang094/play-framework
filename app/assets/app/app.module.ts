import { NgModule }      from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule }   from "@angular/forms"
import { RouterModule, Routes } from "@angular/router"

import { LocalStorageTodoStore } from "./services/store"
import { TodoStore } from "./services/todo.store"
import {APP_ROUTER_PROVIDERS} from "./app.routing"
import HomeComponent from "./component/home.component"
import {AppComponent} from "./app.component"
import {Constants} from "./consts/constants";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      APP_ROUTER_PROVIDERS
    ],
    declarations: [
      HomeComponent,
      AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [
      {provide: TodoStore, useValue: new LocalStorageTodoStore()},
      Constants
    ]
})
export class TodoAppModule { }

