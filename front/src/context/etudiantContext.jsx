import { createContext , useState , useEffect} from "react";

export const EtudiantContext = createContext();

export const EtudiantContextProvider = function({children}){

    const [etudiants, setEtudiants] = useState([]);

    useEffect( ()=> {
        fetch(import.meta.env.VITE_API_URI)
            .then( response => response.json() )
            .then(data => setEtudiants(data))
    } , [])

    
    return <EtudiantContext.Provider value={{ etudiants, setEtudiants }}>
        { children } 
    </EtudiantContext.Provider>
}