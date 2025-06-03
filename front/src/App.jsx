import './App.css'
import Form from './components/Form'
import List from './components/List'
import {EtudiantContextProvider} from "./context/etudiantContext"

function App() {

  return (
    <>
     <EtudiantContextProvider>
        <div className='center'>
          <Form />
          <List />
        </div>
     </EtudiantContextProvider>
    </>
  )
}

export default App
