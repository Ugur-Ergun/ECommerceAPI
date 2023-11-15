using ECommerceAPI.Application.Abstractions;
using ECommerceAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistence.Concretes
{
    public class ProductService : IProductService
    {
        public List<Product> GetProducts()
            => new()
            {
                new() { Id=Guid.NewGuid(),Name="producut1", Price=100, Stock=10},
                new() { Id=Guid.NewGuid(),Name="producut2", Price=200, Stock=10},
                new() { Id=Guid.NewGuid(),Name="producut3", Price=300, Stock=10},
                new() { Id=Guid.NewGuid(),Name="producut4", Price=400, Stock=10},
                new() { Id=Guid.NewGuid(),Name="producut5", Price=500, Stock=10}
            };
    }
}
