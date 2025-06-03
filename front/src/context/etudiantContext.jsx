import { createContext , useState , useEffect} from "react";

export const EtudiantContext = createContext();

export const EtudiantContextProvider = function({children}){

    const [etudiants, setEtudiants] = useState([]);

    useEffect( ()=> {
        fetch("http://localhost:4000")
            .then( response => response.json() )
            .then(data => setEtudiants(data))
    } , [])

    
    return <EtudiantContext.Provider value={{ etudiants, setEtudiants }}>
        { children } 
    </EtudiantContext.Provider>
}