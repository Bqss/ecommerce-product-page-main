import { createContext, useState } from "react";
const lightBoxContext = createContext();

const LightBoxProvider = ({children}) => {
    const [isLbopen, setIsLbOpen] = useState(false);


    const showLb = (index) => {
        setIsLbOpen(true)
    }  
    const hideLb = () => {
        setIsLbOpen(false)
    }
    
    return (
        <lightBoxContext.Provider value={{
            isLbOpen: isLbopen,
            showLb: showLb,
            hideLb: hideLb,
            
        }}>
            {children}
        </lightBoxContext.Provider> 
    )
}

export {LightBoxProvider , lightBoxContext}