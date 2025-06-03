FROM node:alpine

# où dans le conteneur j'ai le dossier de travail par défaut 
# si le dossier /app n'existe pas => docker va le créer 
# cette directive a une influence sur les commandes COPY sur la deuxième la deuxieme option
WORKDIR /app 

COPY . .

# copier les fichiers package.json et package-lock.json dans le conteneur dans le dossier /app/
# COPY ./package*.json /app/

# créer dossier node_modules dans le conteneur dans le dossier /app
RUN npm install 

# copier le fichier index.js dans notre conteneur SANS le dossier node_modules 
# le 1er . => tout ce qui est dans le dossier de la machine host qui est dans le même dossier que Dockerfile
# copie non seulement index.js mais aussi package.json et package-lock.json
# mais AUSSI le fichier .env 


CMD ["node", "index.js"]

EXPOSE 3000

# docker build -t mon_back .    
# docker images
# docker container run -d --name mon_back_c mon_back
# docker ps -a 
# docker logs mon_back_c 
# docker exec -it mon_back_c sh
# ls -al /
# ls -al /app