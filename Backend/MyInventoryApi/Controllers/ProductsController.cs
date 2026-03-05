using Microsoft.AspNetCore.Mvc;
using MyInventoryApi.Models;
using MyInventoryApi.Services;

namespace MyInventoryApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService) =>
        _productService = productService;

    [HttpGet]
    public async Task<List<Product>> Get() =>
        await _productService.GetAsync();

    [HttpPost]
    public async Task<IActionResult> Post(Product newProduct)
    {
        await _productService.CreateAsync(newProduct);
        return CreatedAtAction(nameof(Get), new { id = newProduct.Id }, newProduct);
    }
}