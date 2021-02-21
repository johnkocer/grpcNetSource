using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using ProductsServer;

namespace GrpcService.Services
{
  public class GrpcCrudService : ProductService.ProductServiceBase
  {
    private static readonly List<Product> _products = new();
    private static int idCount = 1;

    private readonly ILogger<GrpcCrudService> _logger;

    static GrpcCrudService()
    {
      _products.Add(new Product {ProductId = idCount++, Name = "Banana",
        Amount = 10, Brand = "Mexico", Value = 2.33f});
      _products.Add(new Product {ProductId = idCount++, Name = "Orange",
        Amount = 20, Brand = "USA", Value = 1.00f});
    }

    public GrpcCrudService(ILogger<GrpcCrudService> logger)
    {
      _logger = logger;
    }

    public override Task<ProductList> GetAll(Empty empty, ServerCallContext context)
    {
      var pl = new ProductList();
      pl.Products.AddRange(_products);

      return Task.FromResult(pl);
    }

    public override Task<Product> Get(ProductId productId, ServerCallContext context)
    {
      return Task.FromResult( //
        (from p in _products where p.ProductId == productId.Id select p).FirstOrDefault());
    }

    public override Task<Product> Insert(Product product, ServerCallContext context)
    {
      product.ProductId = idCount++;
      _products.Add(product);

      return Task.FromResult(product);
    }

    public override Task<Product> Update(Product product, ServerCallContext context)
    {
      var productToUpdate = (from p in _products where p.ProductId == product.ProductId select p).FirstOrDefault();
      if (productToUpdate != null)
      {
        productToUpdate.Name = product.Name;
        productToUpdate.Amount = product.Amount;
        productToUpdate.Brand = product.Brand;
        productToUpdate.Value = product.Value;

        return Task.FromResult(product);
      }

      return Task.FromException<Product>(new EntryPointNotFoundException());
    }

    public override Task<Empty> Delete(ProductId productId, ServerCallContext context)
    {
      var productToDelete = (from p in _products where p.ProductId == productId.Id select p).FirstOrDefault();
      if (productToDelete == null) return Task.FromException<Empty>(new EntryPointNotFoundException());

      _products.Remove(productToDelete);

      return Task.FromResult(new Empty());
    }
  }
}