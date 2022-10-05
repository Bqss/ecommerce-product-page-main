import React, { createContext } from "react";
import productData from "../data/shoes";
const productContext = createContext();
const ProductProvider = ({ children}) => {
    return (
        <productContext.Provider value={productData}>
            {children}
        </productContext.Provider>
    )
}

export { ProductProvider, productContext };