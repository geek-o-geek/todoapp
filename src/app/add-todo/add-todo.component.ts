import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  newTodoTitle: string = '';

  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onAddTodo() {
    if (this.newTodoTitle.trim() !== '') {
      this.addTodo.emit(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }
}
