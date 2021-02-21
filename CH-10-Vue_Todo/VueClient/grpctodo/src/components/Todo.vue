<template>
  <div  >
    <h3>TODO gRPC Client</h3>
    <table style="border:1px">
      <tr >
        <th>
          <input
            v-model="inputField"
            v-on:keyup.enter="addTodo"
            class=""
            placeholder="Todo Item"
          />
        </th>
        <th>
          <button @click="addTodo" class="btn btn-primary">Add Todo</button>
        </th>
      </tr>

      <tr v-for="todo in todos" v-bind:key="todo.id">
        <td>
          <span>{{ todo.task }}</span>
        </td>
        <td>
          <button @click="deleteTodo(todo)" class="btn-danger">DELETE</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Todo, Empty, TodoId } from "../protos/todo_pb";
import todoService from "../protos/todo_grpc_web_pb";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  data: function () {
    return {
      inputField: "",
      todos: [],
    };
  },
 
  methods: {
    getTodos: function () {
      let getRequest = new Empty();
      this.client.getAll(getRequest, {}, (err, response) => {
        this.todos = response.toObject().todosList;
        console.log(this.todos);
      });
    },
    addTodo: function () {
      let request = new Todo();
      request.setTask(this.inputField);
      this.client.insert(request, {}, () => {
        this.inputField = "";
        this.getTodos();
      });
    },
    deleteTodo: function (todo) {
      let deleteRequest = new TodoId();
      deleteRequest.setId(todo.id);
      this.client.delete(deleteRequest, {}, (err, response) => {
        if (response.getMessage() === "success") {
          this.getTodos();
        }
      });
      console.log("todo -> ", todo.id);
    },
  },
  mounted() {
    this.client = new todoService.TodoServiceClient("https://localhost:5001");
    this.getTodos();
  },
};
</script>


