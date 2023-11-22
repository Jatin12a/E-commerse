import { createContext ,useState } from "react";
export const Context = createContext();

const AppContext=({children})=>{
    const [Categories, setCategories] = useState();
    const [products, setProducts] = useState();
    return(
        <Context.Provider value={{
            products,
            setProducts,
            Categories,
            setCategories,
        }}>{children}
        </Context.Provider>
    )
}
export default AppContext;