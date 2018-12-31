import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html'
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter();
  title = '';

  onAddTodo() {
    this.addTodo.emit(this.title);
  }
}
