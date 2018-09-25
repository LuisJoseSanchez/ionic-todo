import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private navControler: NavController
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  goEditTodo(id: number) {
    this.navControler.navigateForward('/edit/' + id);
  }

  deleteDialog(id: number) {

  }
}
