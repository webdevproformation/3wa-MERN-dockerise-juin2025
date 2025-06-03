import { useContext } from "react"
import { EtudiantContext } from "../context/etudiantContext"

const List = () =>{

    const { etudiants , setEtudiants } = useContext(EtudiantContext)

    function click(e)
    {

        const id_etudiant_a_supprimer = e.target.dataset.id ;

        fetch(`http://localhost:4000/delete/${id_etudiant_a_supprimer}`)
            .then(reponse => reponse.json())
            .then(({msg}) => {

                if(msg === "ok"){
                     let etudiantsClone = [...etudiants];

                    etudiantsClone = etudiantsClone.filter(function(etudiant){
                        return etudiant._id !== e.target.dataset.id 
                    })

                    setEtudiants(etudiantsClone)
                    return ;
                }
                
                alert(msg)

            })
        
    }

    return <div>
        <h2>Liste des Etudiants :</h2> 
        <ul>
            { etudiants.map(function(etudiant){
                return <li key={etudiant._id} className="mb-20">
                    <button type="button" className="me-10 btn" onClick={click} data-id={etudiant._id}>x</button>
                    { etudiant.name } - {etudiant.age}
                </li>
            }) }    
        </ul>  
    </div>
}

export default List ;