import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        id: 123,
        title: 'Ordenar cajones',
        description: 'Sacar todas las cosas y tirar lo que no sirva.'
      },
      {
        id: 222,
        title: 'Aprender Ionic',
        description: 'Aprender a programar aplicaciones móviles híbridas.'
      }
    ]
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
