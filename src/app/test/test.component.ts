import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  todoList = [
    {
      label: 'Get Up',
      done: true
    },
    {
      label: 'Take Breakfast',
      done: true
    }
  ];
  ToDoList: Array<any> = this.todoList;
  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      done: false,
    };
    this.todoList.push(newTodo);
  }
}
