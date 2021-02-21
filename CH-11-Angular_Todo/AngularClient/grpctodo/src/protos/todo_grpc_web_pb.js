/**
 * @fileoverview gRPC-Web generated client stub for todos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todos = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todos.TodoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todos.TodoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todos.Todo,
 *   !proto.todos.Todo>}
 */
const methodDescriptor_TodoService_Insert = new grpc.web.MethodDescriptor(
  '/todos.TodoService/Insert',
  grpc.web.MethodType.UNARY,
  proto.todos.Todo,
  proto.todos.Todo,
  /**
   * @param {!proto.todos.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todos.Todo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todos.Todo,
 *   !proto.todos.Todo>}
 */
const methodInfo_TodoService_Insert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todos.Todo,
  /**
   * @param {!proto.todos.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todos.Todo.deserializeBinary
);


/**
 * @param {!proto.todos.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todos.Todo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todos.Todo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todos.TodoServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todos.TodoService/Insert',
      request,
      metadata || {},
      methodDescriptor_TodoService_Insert,
      callback);
};


/**
 * @param {!proto.todos.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todos.Todo>}
 *     Promise that resolves to the response
 */
proto.todos.TodoServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todos.TodoService/Insert',
      request,
      metadata || {},
      methodDescriptor_TodoService_Insert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todos.TodoId,
 *   !proto.todos.DeleteResponse>}
 */
const methodDescriptor_TodoService_Delete = new grpc.web.MethodDescriptor(
  '/todos.TodoService/Delete',
  grpc.web.MethodType.UNARY,
  proto.todos.TodoId,
  proto.todos.DeleteResponse,
  /**
   * @param {!proto.todos.TodoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todos.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todos.TodoId,
 *   !proto.todos.DeleteResponse>}
 */
const methodInfo_TodoService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todos.DeleteResponse,
  /**
   * @param {!proto.todos.TodoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todos.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.todos.TodoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todos.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todos.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todos.TodoServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todos.TodoService/Delete',
      request,
      metadata || {},
      methodDescriptor_TodoService_Delete,
      callback);
};


/**
 * @param {!proto.todos.TodoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todos.DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.todos.TodoServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todos.TodoService/Delete',
      request,
      metadata || {},
      methodDescriptor_TodoService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todos.Empty,
 *   !proto.todos.TodoList>}
 */
const methodDescriptor_TodoService_GetAll = new grpc.web.MethodDescriptor(
  '/todos.TodoService/GetAll',
  grpc.web.MethodType.UNARY,
  proto.todos.Empty,
  proto.todos.TodoList,
  /**
   * @param {!proto.todos.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todos.TodoList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todos.Empty,
 *   !proto.todos.TodoList>}
 */
const methodInfo_TodoService_GetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todos.TodoList,
  /**
   * @param {!proto.todos.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todos.TodoList.deserializeBinary
);


/**
 * @param {!proto.todos.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todos.TodoList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todos.TodoList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todos.TodoServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todos.TodoService/GetAll',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetAll,
      callback);
};


/**
 * @param {!proto.todos.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todos.TodoList>}
 *     Promise that resolves to the response
 */
proto.todos.TodoServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todos.TodoService/GetAll',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetAll);
};


module.exports = proto.todos;

