import { Component, OnInit } from '@angular/core';
import { TodoServiceClient } from '../../protos/TodoServiceClientPb';
import * as grpcWeb from 'grpc-web';

import {
  DeleteResponse,
  Empty,
  Todo as gtodo,
  TodoId,
  TodoList,
} from '../../protos/todo_pb';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  client: TodoServiceClient;
  todo: Todo = new Todo();
  todos: Todo[] = [];
  inputField: '' = '';

  constructor() {
    this.client = new TodoServiceClient('https://localhost:5001');
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    let getRequest = new Empty();
    this.client.getAll(
      getRequest,
      {},
      (err: grpcWeb.Error, response: TodoList) => {
        var result = response.toObject();
        console.log(result);
        this.todos = response.toObject().todosList;
        console.log(this.todos);
      }
    );
  }
  addTodo() {
    let request = new gtodo();
    request.setTask(this.inputField);
    this.client.insert(request, {}, (err: grpcWeb.Error, response: gtodo) => {
      console.log(response.toObject());

      this.inputField = '';
      this.getTodos();
    });
  }
  deleteTodo(todo: any) {
    let deleteRequest = new TodoId();
    deleteRequest.setId(todo.id);
    this.client.delete(
      deleteRequest,
      {},
      (err: grpcWeb.Error, response: DeleteResponse) => {
        if (response.getMessage() === 'success') {
          this.getTodos();
        }
      }
    );
    console.log('todo -> ', todo.id);
  }
}

class Todo {
  id!: string;
  task!: string;
}
