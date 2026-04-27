using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyInventoryApi.Models;

public class Product
{
    [BsonId] // Ez jelzi, hogy ez a MongoDB egyedi azonosítója (Primary Key)
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string Name { get; set; } = null!;
    public string Category { get; set; } = null!;
    public int Quantity { get; set; }
}