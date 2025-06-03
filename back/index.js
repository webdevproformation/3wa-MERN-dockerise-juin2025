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
    age: Number
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

app.get("/delete/:id", async (req, rep )=> {

    const {id} = req.params ;
    console.log(id)
    try{
        await Etudiant.findByIdAndDelete(id)
        rep.json({msg : "ok"})
    }
    catch(err){
        rep.json({msg : err})
    }
});



app.post("/" , async ( req, rep ) => {
    try{
        const { name , age } = req.body;
        const etudiant = new Etudiant({ name , age })
        const resultat = await etudiant.save();
        rep.json(resultat);
    }
    catch(err){
        rep.json({msg : err})
    }
})

app.listen(PORT, console.log(`serveur express start ${PORT}`))