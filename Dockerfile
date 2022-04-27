FROM node:latest

#Do aplikacji w kontenerze kopujemy wszystkie pliki
WORKDIR /zadanie1
COPY . .

#instalacja node_modules do poprawnego działania projektu
RUN npm install

#ustawienie autora
ENV AUTOR 'Jakub Kozłowski'

#Uruchomienie kontenera na porcie 80
EXPOSE 80
ENTRYPOINT [ "npm" ]
CMD [ "start" ]
