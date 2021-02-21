// Copyright 2021(c) SmartIT.All rights reserved.
// John Kocer - https://johnkocer.github.io/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using TodosServer;

namespace Server.Services
{
  public class TodoCrudService : TodoService.TodoServiceBase
  {
    private static readonly List<Todo> _todos = new();
    private static int idCount = 1;

    private readonly ILogger<TodoCrudService> _logger;

    static TodoCrudService()
    {
      _todos.Add(new Todo
      {
        Id = (idCount++).ToString(),
        Task = "Get Milk"
      });
    }

    public TodoCrudService(ILogger<TodoCrudService> logger)
    {
      _logger = logger;
    }

    public override Task<TodoList> GetAll(Empty request, ServerCallContext context)
    {
      var list = new TodoList();
      list.Todos.AddRange(_todos);

      return Task.FromResult(list);
    }

    public override Task<Todo> Insert(Todo request, ServerCallContext context)
    {
      var todo = new Todo();
      todo.Id = (idCount++).ToString();
      todo.Task = request.Task;
      _todos.Add(todo);

      return Task.FromResult(todo);
    }

    public override Task<DeleteResponse> Delete(TodoId request, ServerCallContext context)
    {
      var productToDelete = (from p in _todos where p.Id == request.Id select p).FirstOrDefault();
      if (productToDelete == null) return Task.FromException<DeleteResponse>(new EntryPointNotFoundException());

      _todos.Remove(productToDelete);

      return Task.FromResult(new DeleteResponse {Message = "success"});
    }
  }
}