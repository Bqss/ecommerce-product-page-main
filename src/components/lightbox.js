import { useContext, useRef } from "react";
import  { CarouselWrapper, Pagination, PrevBtn, NextBtn, Close } from "./Carousel";

import { lightBoxContext } from "../store/lightBox";
const hiddenLightbox = 'invisible opacity-0';
const activeLightbox = 'visible opacity-100';

const LightBox = () => {
  
    const { isLbOpen, hideLb , count} = useContext(lightBoxContext);
    const carousel = useRef(null);
   

    const handleClickOutside = (e) => {
        !carousel.current.contains(e.target) && hideLb();
    }

    return (
        <div className={(isLbOpen ? activeLightbox : hiddenLightbox) + ' bg-black/75 z-10 fixed transition-all hidden lg:flex backdrop-blur-sm duration-300 top-0 left-0 w-screen h-screen  items-center'} onClick={handleClickOutside}>
            <div className="max-w-[550px] flex flex-col mx-auto" ref={carousel}>
                <Close className="ml-auto group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 object-cover mb-2 fill-white group-hover:fill-Orange" >
                        <path
                            d="M11.596.782l2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782z"
                          
                            fillRule="evenodd"
                        />
                    </svg>
                </Close>
                <CarouselWrapper count={count}>
                    
                    <NextBtn className="absolute top-1/2 -right-6 bg-white w-12 h-12 rounded-full inline-flex items-center justify-center group">
                        <svg width="13" height="18" className=" stroke-slate-800 group-hover:stroke-red-600"   xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"  strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    </NextBtn>
                    <PrevBtn className="absolute top-1/2 -left-6 bg-white w-12 h-12 rounded-full inline-flex items-center justify-center group">
                        <svg width="12" height="18" className="stroke-slate-800 group-hover:stroke-red-600"  xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8"      strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    </PrevBtn>
                </CarouselWrapper>
                <Pagination className=" px-12 gap-6 mt-8" />
            </div>
        </div>

    )
}




export default LightBox;