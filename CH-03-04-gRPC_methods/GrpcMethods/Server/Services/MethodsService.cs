using System;
using System.Threading.Tasks;
using Grpc.Core;
using GrpcMethods;
using Microsoft.Extensions.Logging;

namespace Server
{
  public class MethodsService : ExampleService.ExampleServiceBase
  {
    private readonly ILogger<MethodsService> _logger;

    public MethodsService(ILogger<MethodsService> logger)
    {
      _logger = logger;
    }

    public override async Task<ExampleResponse> UnaryCall(ExampleRequest request, ServerCallContext context)
    {
      var response = new ExampleResponse
        {PageIndex = 1, PageData = $"This is UnaryCall- Request-pageIndex {request.PageIndex}"};
      return await Task.FromResult(response);
    }

    public override async Task StreamingFromServer(ExampleRequest request,
      IServerStreamWriter<ExampleResponse> responseStream, ServerCallContext context)
    {
      for (var i = 0; i < 5; i++)
      {
        await responseStream.WriteAsync(new ExampleResponse { PageData = "Page = " + i });
        await Task.Delay(TimeSpan.FromSeconds(1));
      }
    }

    public override async Task<ExampleResponse> StreamingFromClient(
      IAsyncStreamReader<ExampleRequest> requestStream, ServerCallContext context)
    {
      while (await requestStream.MoveNext())
      {
        var message = requestStream.Current;
        Console.WriteLine("Received " + message.PageData);
      }

      return new ExampleResponse() { PageIndex = 0, PageData = "Page 1" };
    }

    public override async Task StreamingBothWays(IAsyncStreamReader<ExampleRequest> requestStream,
      IServerStreamWriter<ExampleResponse> responseStream, ServerCallContext context)
    {
      await foreach (var message in requestStream.ReadAllAsync())
      {
        Console.WriteLine("Received FROM CLIENT " + message.PageData);

        await responseStream.WriteAsync(new ExampleResponse() { PageData = "FROM SERVER = " + message.PageData });
      }
    }
  }
}