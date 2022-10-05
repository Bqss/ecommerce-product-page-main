import React, { useContext , useState } from "react";
import { CarouselProvider, carouselContext } from './../store/carouselProvider';
import { lightBoxContext  } from "../store/lightBox";
import { productContext } from "../store/product";
const activeThumb = 'border-2 border-orange-500 ';


const Carousel = ({children , count}) => {
    return (
        
        <CarouselProvider count={count} >
            {children}
        </CarouselProvider>
        
    )
};  

const CarouselWrapper = ({  children }) => {
    const { picture } = useContext(productContext);
    const { counter } = useContext(carouselContext);
    const {showLb, hideLb} = useContext(lightBoxContext);

    
    return (
        <div className={"relative "} >
            
            <div className="lg:rounded-lg overflow-hidden" role={'button'} onClick={(() => showLb(counter))  } >
                <img src={picture[counter]} alt="dd"  />
            </div>
            {children}
        </div>
    )
}

const Close = ({ className , children}) => {
    const {  hideLb } = useContext(lightBoxContext);
    return (
        <button className={className} onClick={() => hideLb()}>{ children}</button>
    )
}

const Pagination = ({className = '' , onClick}) => {
    const { picture } = useContext(productContext)
    const { thumbClick, counter } = useContext(carouselContext);
    return (
        <div className={"hidden gap-4 mt-4 lg:flex " + className}>
            {picture.map((e, i) => {
                return (
                    <div key={i} className={(counter === i ? activeThumb : '') + ' rounded-xl overflow-hidden '} role={'button'} onClick={onClick ? () => onClick(i) : () => thumbClick(i)}>
                        <img src={e} className={(counter === i ? 'opacity-40' : '')} alt="thumbnail" />
                    </div>
                )
            })}
            </div>
    )
}

const NextBtn = ({ children, className='' ,onCLick }) => {
    const {clickNext} = useContext(carouselContext);
    return (
        <button className={className } onClick={onCLick ? ()=> onCLick() : () => clickNext()}>
            { children}
        </button>
    );
}

const PrevBtn = ({ children, className ='' ,onCLick }) => {
    const {clickPrev} = useContext(carouselContext);
    return (
        <button className={className } onClick={onCLick ? ()=> onCLick() : () => clickPrev()}>
            {children}
        </button>
    );
}

export {Carousel as default , NextBtn , PrevBtn , Pagination , CarouselWrapper , Close }