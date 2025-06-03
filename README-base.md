# après la pause base de données mongodb 

=> associer avec notre back 

- créer de fichier dockerfile => directement utilisé une image disponible sur dockerhub
- <https://hub.docker.com/_/mongo>


- créer une image => nom 
- Dockerfile 

 
```sh
# transformer le fichier Dockerfile => image docker 
docker build -t mon_nginx .
docker build -t mon_nginx:latest .


# -t => tag 
# nom_nginx => nom de l'image 
# nom_nginx:1.0.0
# nom_nginx:alpine
# nom_nginx:ubuntu-22:01
# nom_nginx:debian-16:03
```

docker pull mongo => 8    => 10
docker pull mongo:latest 

docker pull mongo:8


```sh
# voir est ce que dans les images stockées dans votre machine est ce que vous avez une image mongo:latest
# si oui docker va utiliser celle qui est disponible
# si non docker pull mongo télécharger depuis dockerhub l'image concernée mongo:latest
# docker build  mongo:latest -> créer l'image 
docker run --name nom_conteneur mongo # transformer l'image en conteneur 
```

docker run --name mon_mongo -d --rm mongo:8.0.9-nanoserver

docker run --name mon_mongo -d --rm mongo


- 02-docker => rappel sur docker et les commandes
- 03-docker compose => projet en 3 parties
    - partie back .. il manque des infos dans le fichier .env
    - créer la partie base de données 
        - présentation de docker hub docker pull / docker run image docker disponible sur dockerhub 
        - 1ère partie `docker run --name mon_mongo -d --rm mongo`     
        - 2eme je veux créer l'image docker avec le back 
        - modifier le fichier docker-compose.yaml


```yaml
toto:
    - bonjour
    - comment
    - cv

```

```js
const toto = ["bonjour", "comment" , "cv"]
```


```yaml
toto:
    bonjour: text
    comment: text
    cv: text

```

```js
const toto = {
    bonjour : "text",
    comment : "text",
    cv : "text",
}
```

=> rdv 15h55 bon café @ toute suite 
=> React => front 