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

# cas pratique

- pouvez ajouter pour chaque étudiant de la liste un bouton qui permet de supprimer le profil
- une fois que le bouton est ajouté vous devez :
    - ajouter une nouvelle méthode dans le back qui permet de supprimer une etudiant dans la base 
    - ajouter dans le front les traitements nécessaires pour effacer visuellement l'étudiant dans la liste


