using System;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Net.Client;
using GrpcMethods;

namespace Client
{
  class Program
  {
    private static async Task Main(string[] args)
    {
      var channel = GrpcChannel.ForAddress("https://localhost:5001");

      //var client = new Greeter.GreeterClient(channel);
      //var reply = await client.SayHelloAsync(new HelloRequest { Name = "John" });
      //Console.WriteLine("Greeting: " + reply.Message);

      //Console.WriteLine("Shutting down");
      //Console.WriteLine("Press any key to exit...");
      //Console.ReadKey();

      var client = new ExampleService.ExampleServiceClient(channel);
      await UnaryCallExample(client);
      //await ServerStreamingCallExample(client);
      //await ClientStreamingCallExample(client);
      //await BiDirectionalStreamingCallExample(client);

      Console.WriteLine("Shutting down");
      Console.WriteLine("Press any key to exit...");
      Console.ReadKey();
    }

    private static async Task UnaryCallExample(ExampleService.ExampleServiceClient client)
    {
      var request = new ExampleRequest { PageIndex = 0, PageSize = 20, IsDescending = true };
      var response = await client.UnaryCallAsync(request);

      Console.WriteLine("Received " + response.PageData);
    }

    private static async Task ServerStreamingCallExample(ExampleService.ExampleServiceClient client)
    {
      var request = new ExampleRequest { PageIndex = 0, PageSize = 20, IsDescending = true };
      using var call = client.StreamingFromServer(request);

      await foreach (var response in call.ResponseStream.ReadAllAsync())
      {
        Console.WriteLine("Received " + response.PageData);
      }
    }

    private static async Task ClientStreamingCallExample(ExampleService.ExampleServiceClient client)
    {
      using (var call = client.StreamingFromClient())
      {
        for (var i = 0; i < 5; i++)
        {
          await call.RequestStream.WriteAsync(new ExampleRequest()
          {
            PageData = "Page = " + i
          });
          await Task.Delay(TimeSpan.FromSeconds(1));
        }

        await call.RequestStream.CompleteAsync();
        var reply = await call.ResponseAsync;
        Console.WriteLine("From Server: " + reply.PageData);

      }
    }

    private static async Task BiDirectionalStreamingCallExample(ExampleService.ExampleServiceClient client)
    {
      using (var call = client.StreamingBothWays())
      {
        var responseReaderTask = Task.Run(async () =>
        {
          while (await call.ResponseStream.MoveNext())
          {
            var response = call.ResponseStream.Current;
            Console.WriteLine("From Server: " + response.PageData);

          }
        });

        for (var i = 0; i < 5; i++)
        {
          await call.RequestStream.WriteAsync(new ExampleRequest()
          {
            PageData = "Page = " + i
          });
          await Task.Delay(TimeSpan.FromSeconds(1));
        }

        await call.RequestStream.CompleteAsync();
        await responseReaderTask;
      }
    }
  }
}