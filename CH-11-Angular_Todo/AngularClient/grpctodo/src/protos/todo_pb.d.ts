import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class TodoId extends jspb.Message {
  getId(): string;
  setId(value: string): TodoId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoId.AsObject;
  static toObject(includeInstance: boolean, msg: TodoId): TodoId.AsObject;
  static serializeBinaryToWriter(message: TodoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoId;
  static deserializeBinaryFromReader(message: TodoId, reader: jspb.BinaryReader): TodoId;
}

export namespace TodoId {
  export type AsObject = {
    id: string,
  }
}

export class Todo extends jspb.Message {
  getId(): string;
  setId(value: string): Todo;

  getTask(): string;
  setTask(value: string): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    id: string,
    task: string,
  }
}

export class TodoList extends jspb.Message {
  getTodosList(): Array<Todo>;
  setTodosList(value: Array<Todo>): TodoList;
  clearTodosList(): TodoList;
  addTodos(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoList.AsObject;
  static toObject(includeInstance: boolean, msg: TodoList): TodoList.AsObject;
  static serializeBinaryToWriter(message: TodoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoList;
  static deserializeBinaryFromReader(message: TodoList, reader: jspb.BinaryReader): TodoList;
}

export namespace TodoList {
  export type AsObject = {
    todosList: Array<Todo.AsObject>,
  }
}

export class DeleteResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    message: string,
  }
}

