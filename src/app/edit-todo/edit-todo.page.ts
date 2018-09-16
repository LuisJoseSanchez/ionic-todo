import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {

  private todo: Todo;

  constructor() {
    this.todo = {
      id: 0,
      title: 'Fregar la cocina',
      description: 'Escurrir bien para que no se formen charcos.'
    }
  }

  ngOnInit() {
    // Grab id from route

  }

  saveTodo() {
    console.log(this.todo);
  }
}
