## 1. Serwer

- Do utworzenia serwera używamy frameworka express wraz z pakietem satelize, który zwraca informacje o lokalizacji na podstawie IP użytkownika.
- Aby aplikacja działała poprawnie należy skorzystać z serwera nginx. Konfiguracja serwera została zapisana w pliku ngnix.conf, który należy podmienić w folderze /conf
- Uruchomienie projektu: npm start.

## 2. Opracowanie pliku Dockerfile

- Opis w pliku Dockerfile

## 3.Budowa opracowanego obrazu kontenera

- a) docker build -t tc .
- b) docker run -d -p 8080:3000 --rm --name docker_zadanie1 tc
- c) docker logs zad1-kontener
- d) docker history tc

## 4.Budowa kontenera zbudowanego dla różne architektury z wykorzystaniem GitHubActions

- Wykorzystanie wsparcia dla emulacji QEMU w jądrze systemu
- Ustawienie platform w sekcji "Build and push" za pomocą: platforms: linux/arm/v7, linux/arm64/v8, linux/amd64.
