// Copyright 2021(c) SmartIT.All rights reserved.
// John Kocer - https://johnkocer.github.io/

using System.Threading.Tasks;
using Grpc.Core;
using Hello;
using Microsoft.Extensions.Logging;

namespace Kocer.Server.Services
{
    public class HelloService : Hello.Hello.HelloBase
  {
        private readonly ILogger _logger;

        public HelloService(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<HelloService>();
        }

        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            _logger.LogInformation($"Sending hello to {request.Name}");
            return Task.FromResult(new HelloReply { Message = "Hello from Server " + request.Name });
        }
    }
}
