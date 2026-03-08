
FROM node:24-alpine AS build
WORKDIR /app

# Függőségek telepítése
COPY package*.json ./
RUN npm install

# Teljes forráskód másolása és buildelés
COPY . .
RUN npm run build --configuration=production

# 2. fázis: Kiszolgálás Nginx-szel
FROM nginx:alpine

# Másoljuk a lefordított fájlokat az Nginx html mappájába.
# FONTOS: Az Angular 17+ esetében a mappa vége /browser. 
# Cseréld ki a "projekt-neved" részt az angular.json-ben szereplő projektnévre!
COPY --from=build /app/dist/project/browser /usr/share/nginx/html

# Exponáljuk a 80-as portot
EXPOSE 80

# Nginx indítása
CMD ["nginx", "-g", "daemon off;"]