import React, { createContext, useContext, useState } from "react";

import { productContext } from "./product";
const carouselContext = createContext();
const CarouselProvider = ({ children }) => {
    
    const {picture} = useContext(productContext);
    const [counter, setcounter] = useState( 0);
    const clickNext = () => {
        setcounter(e => e < picture.length -1 ? e+1 : 0)
    }
    const clickPrev = () => {
        setcounter(e => e > 0 ? e - 1 : picture.length - 1);
    }
    const thumbClick = (i) => {
        setcounter(i)
    }

    
    return (        
        <carouselContext.Provider value={
            {
                counter: counter,
                clickPrev: clickPrev,
                clickNext: clickNext,
                thumbClick: thumbClick

            }
        }>
            {children}
        </carouselContext.Provider>

        
    )
}
export  {CarouselProvider , carouselContext};