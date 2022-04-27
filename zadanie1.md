#Punkt 1

## Do utworzenia serwera używamy frameworka express wraz z pakietem satelize, który zwraca informacje o lokalizacji na podstawie IP użytkownika.

## Uruchomienie projektu: npm start.

#Punkt 2

- Opis w pliku Dockerfile

#Punkt 3

## Budowa opracowanego obrazu kontenera

- docker build -t tc . (zad1 - nazwa tagu)
- docker run -d -p 8080:3000 --rm --name docker_zadanie1 tc (zad1-kontener - nazwa kontenera)
- docker logs zad1-kontener
- docker history tc

#Punkt 4

## Budowa kontenera zbudowanego dla różne architektury z wykorzystaniem GitHubActions

- Wykorzystanie wsparcia dla emulacji QEMU w jądrze systemu
- Ustawienie platform w sekcji "Build and push" za pomocą: platforms: linux/arm/v7, linux/arm64/v8, linux/amd64.
