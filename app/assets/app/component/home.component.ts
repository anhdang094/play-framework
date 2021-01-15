/**
 * Created by anh.dang on 11/26/2016.
 */
import {Component} from "@angular/core"
import {Todo} from "../services/store"
import {TodoStore} from "../services/todo.store"
import { Router } from "@angular/router"
import {Constants} from "../consts/constants"

@Component({
  templateUrl: "assets/app/htmls/app.html"
})
export default class HomeComponent  {

  newTodoText = ""

  constructor(private todoStore:TodoStore, private router:Router, private constants: Constants) {
    this.todoStore = todoStore
    this.router = router
  }

  stopEditing(todo:Todo, editedTitle:string)  {
    todo.title = editedTitle
    todo.editing = false
  }

  cancelEditingTodo(todo:Todo) {
    todo.editing = false
  }

  updateEditingTodo(todo:Todo, editedTitle:string) {
    editedTitle = editedTitle.trim()
    todo.editing = false

    if (editedTitle.length === 0) {
      return this.todoStore.remove(todo)
    }

    todo.title = editedTitle
  }

  editTodo(todo:Todo) {
    todo.editing = true
  }

  removeCompleted() {
    this.todoStore.removeCompleted()
  }

  toggleCompletion(todo:Todo) {
    this.todoStore.toggleCompletion(todo)

  }

  remove(todo:Todo) {
    this.todoStore.remove(todo)
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText)
      this.newTodoText = ""
    }
  }
  changeRoute(routeValue:string) {
    this.router.navigate([routeValue])
  }
}
