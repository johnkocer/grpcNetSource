using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using Server;

namespace Kocer.Grpc.Server.Services
{
  public class AddService : global::Server.AddService.AddServiceBase
  {
    private readonly ILogger<AddService> _logger;

    public AddService(ILogger<AddService> logger)
    {
      _logger = logger;
    }


    public override async Task<AddReply> Add(AddRequest request, ServerCallContext context)
    {
      await Task.Delay(1500);

      var x = request.X;
      var y = request.Y;

      if (x >= 0 && y >= 0)
        return new AddReply {Sum = x + y};
      throw new RpcException(new Status(StatusCode.InvalidArgument, "x < 0 or y < 0 "));
    }
  }
}