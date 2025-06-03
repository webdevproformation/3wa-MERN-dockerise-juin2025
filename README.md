# docker compose 

permet de créer plusieurs conteneurs 
déterminer comment ces conteneurs vont interagir les uns avec les autres 

- projet qui contient 3 parties full Javascript

- front => React ✅
- Back => NodeJS ✅ // Symfony 
- base de données qui utilise MongoDb ✅

- docker build => front
- docker build => back
- docker run => mongodb 

# créer le fichier docker-compose.yaml

```yaml
version: '3.9'

services:
  
  # React
  front:

  # Node
  back:

  # mongoDB
  bdd:
```

# créer le back 

installer les dépendances de la partie back du projet 

```sh
cd ../03-docker-compose
mkdir back && cd back
npm init --yes
npm i cors dotenv express mongoose
# cors => politique CORS télécharger depuis un autre domaine 
# dotenv => fichier environnement
# express => serveur http
# mongoose => communiquer avec la base de données MongoDB
```

créer le fichier principal du back `index.js`

```js
// index.js
import express from "express"
import cors from "cors"
import {connect , Schema, model} from "mongoose"
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 1234

connect(process.env.MONGO_URI)
    .then(()=> console.log("connexion réussie à la base de données"))
    .catch(err=> console.log(err))

app.use(cors());
app.use(express.json());

const etudiantSchema = Schema({
    name: String,
})
const Etudiant = model("etudiants",etudiantSchema);


app.get("/", async (req, rep )=> {
    try{
        const etudiants = await Etudiant.find()
        rep.json(etudiants)
    }
    catch(err){
        rep.json({msg : err})
    }
});

app.post("/" , async ( req, rep ) => {
    try{
        const { name } = req.body;
        const etudiant = new Etudiant({ name })
        const resultat = await etudiant.save();
        rep.json(resultat);
    }
    catch(err){
        rep.json({msg : err})
    }
})

app.listen(PORT, console.log(`serveur express start ${PORT}`))
```

# créer le fichier .env

```
MONGO_URI=xxxxxxxxxx
PORT=4000
```

# créer un fichier .dockerignore

pour éviter de copier le dossier `node_modules` dans notre conteneur

```
node_modules
```

# vérifier que tout fonctionne ???


```txt
# docker build -t mon_back .    
# docker images
# docker container run -d --name mon_back_c mon_back
# docker ps -a 
# docker logs mon_back_c 
# docker exec -it mon_back_c sh
# ls -al /
# ls -al /app
```

docker logs mon_back_c

(node:1) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///app/index.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /app/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)

=> modifier le fichier package.json `"type":"module",`

=> ok serveur express start 4000

=> MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

modifier le fichier .env 

```txt
MONGO_URI=mongodb://xxxxxxxxxxxxxxxx
PORT=4000
```

# supprimer tout 

docker stop mon_back_c
docker rm mon_back_c
docker rmi mon_back

# après la pause base de données mongodb 

=> associer avec notre back 

=> finir avec la partie front => React 


# rdv 14h00 bon appétit !!!!!!!!!!!!

d: