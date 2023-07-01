import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
    { id: 3, title: 'Buy egg', completed: false },
    { id: 4, title: 'Read a file', completed: true },
  ];

  // Add more functions here for managing TODO items (e.g., add, delete, mark as completed).
  // You can use the todos array to manipulate the list.
  
  constructor() {}

  ngOnInit(): void {}
}
