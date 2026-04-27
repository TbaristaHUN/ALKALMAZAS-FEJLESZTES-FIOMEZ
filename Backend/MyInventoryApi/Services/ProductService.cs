using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MyInventoryApi.Models;

namespace MyInventoryApi.Services;

public class ProductService
{
    private readonly IMongoCollection<Product> _productsCollection;

    public ProductService(IConfiguration configuration)
    {
        //ConnectionString kiolvasása a környezeti változókból
        // Ha nem találjuk, marad a localhost (helyi futtatáshoz)
        var connectionString = configuration.GetValue<string>("ConnectionStrings:MongoDb")
                               ?? "mongodb://localhost:27017";

        var mongoClient = new MongoClient(connectionString);
        var mongoDatabase = mongoClient.GetDatabase("InventoryDb");
        _productsCollection = mongoDatabase.GetCollection<Product>("Products");
    }

    public async Task<List<Product>> GetAsync() =>
        await _productsCollection.Find(_ => true).ToListAsync();

    public async Task<Product?> GetAsync(string id) =>
        await _productsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Product newProduct) =>
        await _productsCollection.InsertOneAsync(newProduct);

    public async Task UpdateAsync(string id, Product updatedProduct) =>
        await _productsCollection.ReplaceOneAsync(x => x.Id == id, updatedProduct);

    public async Task RemoveAsync(string id) =>
        await _productsCollection.DeleteOneAsync(x => x.Id == id);
}