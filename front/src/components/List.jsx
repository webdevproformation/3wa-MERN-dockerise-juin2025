import { useContext } from "react"
import { EtudiantContext } from "../context/etudiantContext"

const List = () =>{

    const { etudiants } = useContext(EtudiantContext)

    return <div>
        <h2>Liste des Etudiants :</h2> 
        <ul>
            { etudiants.map(function(etudiant){
                return <li key={etudiant._id}>{ etudiant.name } - {etudiant.age}</li>
            }) }    
        </ul>  
    </div>
}

export default List ;