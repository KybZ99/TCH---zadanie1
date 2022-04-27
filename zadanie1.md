#Punkt 1

- Do utworzenia serwera używamy frameworka express wraz z pakietem satelize, który zwraca informacje o lokalizacji na podstawie IP użytkownika.
  Uruchomienie projektu: npm start.

#Punkt 2

- Opis w pliku Docker

#Punkt 3

- Budowa opracowanego obrazu kontenera
  a)docker build -t tc . (zad1 - nazwa tagu)
  b) docker run -d -p 8080:3000 --rm --name docker_zadanie1 tc (zad1-kontener - nazwa kontenera)
  c)docker logs zad1-kontener
  d)docker history tc

#Punkt 4

-
