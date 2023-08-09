import { createContext, useState } from "react";

export const DataContext = createContext(null);



const DataProvider = ({children}) =>{
    const [notes,setNotes] = useState([]);
    const [archive,setArchive] = useState([]);
    const [deleteNotes,setDeleteNotes] = useState([]);

    return(
        <DataContext.Provider value={{
            notes,
            setNotes,
            archive,
            setArchive,
            deleteNotes,
            setDeleteNotes
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataProvider;