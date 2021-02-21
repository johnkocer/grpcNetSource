/**
 * @fileoverview gRPC-Web generated client stub for todos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as todo_pb from './todo_pb';


export class TodoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoInsert = new grpcWeb.AbstractClientBase.MethodInfo(
    todo_pb.Todo,
    (request: todo_pb.Todo) => {
      return request.serializeBinary();
    },
    todo_pb.Todo.deserializeBinary
  );

  insert(
    request: todo_pb.Todo,
    metadata: grpcWeb.Metadata | null): Promise<todo_pb.Todo>;

  insert(
    request: todo_pb.Todo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: todo_pb.Todo) => void): grpcWeb.ClientReadableStream<todo_pb.Todo>;

  insert(
    request: todo_pb.Todo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: todo_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todos.TodoService/Insert',
        request,
        metadata || {},
        this.methodInfoInsert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todos.TodoService/Insert',
    request,
    metadata || {},
    this.methodInfoInsert);
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    todo_pb.DeleteResponse,
    (request: todo_pb.TodoId) => {
      return request.serializeBinary();
    },
    todo_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: todo_pb.TodoId,
    metadata: grpcWeb.Metadata | null): Promise<todo_pb.DeleteResponse>;

  delete(
    request: todo_pb.TodoId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: todo_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<todo_pb.DeleteResponse>;

  delete(
    request: todo_pb.TodoId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: todo_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todos.TodoService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todos.TodoService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoGetAll = new grpcWeb.AbstractClientBase.MethodInfo(
    todo_pb.TodoList,
    (request: todo_pb.Empty) => {
      return request.serializeBinary();
    },
    todo_pb.TodoList.deserializeBinary
  );

  getAll(
    request: todo_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<todo_pb.TodoList>;

  getAll(
    request: todo_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: todo_pb.TodoList) => void): grpcWeb.ClientReadableStream<todo_pb.TodoList>;

  getAll(
    request: todo_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: todo_pb.TodoList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todos.TodoService/GetAll',
        request,
        metadata || {},
        this.methodInfoGetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todos.TodoService/GetAll',
    request,
    metadata || {},
    this.methodInfoGetAll);
  }

}

