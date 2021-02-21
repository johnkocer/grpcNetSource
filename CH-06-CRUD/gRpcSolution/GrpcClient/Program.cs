using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using ProductsClient;
using SmartIT.DebugHelper;

namespace GrpcClient
{
  internal class Program
  {
    private static async Task Main(string[] args)
    {
      Console.WriteLine("--------------CLIENT ---------");
      var channel = GrpcChannel.ForAddress("https://localhost:5001");

      var client = new ProductService.ProductServiceClient(channel);

      var products = client.GetAll(new Empty());
      Console.WriteLine("[ GetAll ]");
      products.CDump("-- products");

      Console.WriteLine("");

      Console.WriteLine("[ Get Id=1 ]");

      var product = client.Get(new ProductId {Id = 1});
      product.CDump("-- product id=1");
      Console.WriteLine("");
      Console.WriteLine("[ Insert ]");

      var newProduct = new Product {Name = "Melon", Brand = "Vegi", Amount = 10, Value = 2.99f};
      var createdProduct = client.Insert(newProduct);
      createdProduct.DDump("createdProduct");
      Console.WriteLine("");
      Console.WriteLine("[ GetAll ]");

      var products01 = client.GetAll(new Empty());
      products01.CDump("-- products");
      createdProduct.Name = "MELON";
      Console.WriteLine("");
      Console.WriteLine("[ Update ]");

      var updatedProduct = await client.UpdateAsync(createdProduct);
      updatedProduct.CDump("updatedProduct");
      Console.WriteLine("");
      Console.WriteLine("[ Delete ]");

      var deletedProduct = await client.DeleteAsync(new ProductId {Id = 1});
      updatedProduct.CDump("updatedProduct");
      Console.WriteLine("");
      Console.WriteLine("[ GetAll ]");

      products01 = client.GetAll(new Empty());
      products01.CDump("-- products");

      Console.WriteLine("Press any key to exit...");
      Console.ReadKey();
    }
  }
}