using Microsoft.AspNetCore.Builder;
using Swashbuckle.AspNetCore.SwaggerUI;

var builder = WebApplication.CreateBuilder(args);

// Szolgáltatások regisztrálása
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer(); // Ez fontos a Swaggernek
builder.Services.AddSwaggerGen(); // A régi, de stabil Swagger generátor
builder.Services.AddSingleton<MyInventoryApi.Services.ProductService>();

var app = builder.Build();

//Swagger engedélyezése Dockerben és helyileg is
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    c.RoutePrefix = "swagger"; // Így a http://localhost:5000/swagger címen lesz
});

// app.UseHttpsRedirection(); 

app.UseAuthorization();
app.MapControllers();

app.MapGet("/", () => "A Backend fut! Probald a /swagger utvonalat.");

app.Run();