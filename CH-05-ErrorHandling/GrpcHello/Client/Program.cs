using System;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Net.Client;
using Server;

namespace Kocer.Grpc.Client
{
  internal class Program
  {
    private static async Task Main(string[] args)
    {
      var channel = GrpcChannel.ForAddress("https://localhost:5001");
      var client = new AddService.AddServiceClient(channel);

      float x = -1;
      float y = 2;

      try
      {
        var response = client.Add(new AddRequest() { X = x, Y=y },
          deadline: DateTime.UtcNow.AddSeconds(5));

        Console.WriteLine($"{x} + {y} = {response.Sum}");
      }
      catch (RpcException e) when (e.StatusCode == StatusCode.InvalidArgument)
      {
        Console.WriteLine("Error : " + e.Status.Detail);
      }
      catch (RpcException e) when (e.StatusCode == StatusCode.DeadlineExceeded)
      {
        Console.WriteLine("Deadline exceeded !");
      }


      Console.WriteLine("Shutting down");
      Console.WriteLine("Press any key to exit...");
      Console.ReadKey();
    }
  }
}