MyInventory - Készletkezelő Backend API

Ez a projekt egy konténerizált, MongoDB alapú készletkezelő rendszer, amely mérnökinformatikus hallgatói beadandóként készült. 

Technológiai stog

- Frontend: Angular
- Backend: .NET 10 (ASP.NET Core API)
- Adatbázis: MongoDB 8.0 (NoSQL)
- Konténerizáció: Docker & Docker Compose
- Dokumentáció: Swagger / OpenAPI

Telepítés és futtatás
A projekt futtatásához Docker Desktop megléte szükséges.

Repozitórium klónozása:
   ```bash
   git clone [https://github.com/TBaristaHUN/ALKALMAZAS-FEJLESZTES-FIOMEZ.git](https://github.com/TBaristaHUN/ALKALMAZAS-FEJLESZTES-FIOMEZ.git)
   
A projektmunka futtatása: docker-compose up --build


A frontend felület a http://localhost:4200 porton érhető el
AZ API az 5001-es porton érhető el, mivel az 5000-es port ütközött az Apple Airplay-el Mac-en.
A Swagger elérése: http://localhost:5001/swagger
