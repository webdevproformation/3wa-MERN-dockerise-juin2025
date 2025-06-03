# créer un projet react

```sh
cd 03-docker-compose
npm create vite
front
React
Javascript

cd front
npm install
npm run dev
```

App
    Form
        formulaire avec 2 champs => nom / age
    List 
        <ul>
            <li> nom - age
            <li> nom - age
        

http://localhost:5173/

# utilisation de Tailwind pour le css

```sh
npm install tailwindcss @tailwindcss/vite
```

# dockerizer le front 

- ajouter un fichier Dockerfile 
- modifier le fichier docker-compose.yaml pour qu'il utilise le fichier Dockerfile
- docker compose down
- docker compose up -d --build
- <http://localhost/>
