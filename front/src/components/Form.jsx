import {useState , useContext} from "react"
import { EtudiantContext } from "../context/etudiantContext"

const Form = () => {

    const [name, setName] = useState("");
    const [age, setAge]= useState("");
    const { setEtudiants , etudiants } = useContext(EtudiantContext)

    function submit(e){
        e.preventDefault();
        //console.log(name, age);
        // verification
        if(name === ""){
            alert("veuillez compléter le champ nom");
            return;
        }
        if(age === ""){
            alert("veuillez compléter le champ age");
            return;
        }
        const options = { 
            method:"POST", 
            body: JSON.stringify({ name , age }) , 
            headers : { "Content-Type": "application/json" } 
        };
        fetch("http://localhost:4000" , options)
            .then(reponse => reponse.json())
            .then(data => {
                // mettre à jour le context => mis à jour de la liste
                const etudiantsClone = [...etudiants];
                etudiantsClone.push(data);
                setEtudiants(etudiantsClone);
                // vider le formulaire
                setName("");
                setAge("");
            })
    }

    return <div className="mb-20">
        <h1>Ajouter un nouveau profil Etudiant</h1>
        <form onSubmit={submit}>
            <div>
                <label htmlFor="name">nom étudiant</label>
                <input type="text" name="name" id="name" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 border-solid rounded-lg" placeholder="nom" value={name} onChange={(item) => setName(item.target.value) }/>    
            </div> 
            <div>
                <label htmlFor="age">age étudiant</label>
                <input type="number" name="username" id="age" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 border-solid rounded-lg" placeholder="age" value={age} onChange={(item) => setAge(item.target.value) }/>    
            </div>
            <input type="submit" className="px-3 py-2 bg-blue-500 hover:bg-sky-700 rounded-lg" value="ajouter un nouvel étudiant"/>   
        </form>    
    </div>
}
export default Form ;

// cas pratique :
// utiliser le Context => 
// ajouter un nouveau profil étudiant dans le const [etudiants, setEtudiants] = useState([]);