import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];
  todosCounter = 2;

  constructor() {
    this.todos = [
      {
        id: 0,
        title: 'Ordenar cajones',
        description: 'Sacar todas las cosas y tirar lo que no sirva.'
      },
      {
        id: 1,
        title: 'Aprender Ionic',
        description: 'Aprender a programar aplicaciones móviles híbridas.'
      }
    ]
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id: number): Todo {
    //return this.todos.filter(t => t.id == id)[0];
    return this.todos.find(t => t.id == id);
  }

  saveTodo(t: any) {
    if (t.id) {
      let index = this.todos.findIndex(todo => todo.id === t.id);
      this.todos[index] = {
        id: t.id,
        title: t.title,
        description: t.description
      }
    } else {
      t.id = this.todosCounter;
      this.todos.push(t);
      this.todosCounter++;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id != id);
  }
}
