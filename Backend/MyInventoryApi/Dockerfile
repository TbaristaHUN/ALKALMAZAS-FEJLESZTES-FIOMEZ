#Build szakasz: SDK használata a fordításhoz
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Függőségek letötlése és a projekt fordítása
COPY ["MyInventoryApi.csproj", "./"]
RUN dotnet restore

# Program fordítása
COPY . .
RUN dotnet publish -c Release -o /app

# Runtime futtatása
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=build /app .

# Alapértelmezett port az ASP.Net-en
EXPOSE 8080
ENTRYPOINT ["dotnet", "MyInventoryApi.dll"]