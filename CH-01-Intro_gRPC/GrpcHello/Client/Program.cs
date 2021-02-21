using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using Hello;
namespace Kocer.Client
{
  class Program
  {
    static async Task Main(string[] args)
    {
      using var channel = GrpcChannel.ForAddress("https://localhost:5001");
      var client = new Hello.Hello.HelloClient(channel);

      var reply = await client.SayHelloAsync(new HelloRequest { Name = "John" });
      Console.WriteLine("SERVER RESPONSE : " + reply.Message);

      Console.WriteLine("Shutting down");
      Console.WriteLine("Press any key to exit...");
      Console.ReadKey();
    }
  }
}
