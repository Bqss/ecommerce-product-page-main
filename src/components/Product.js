import Carousel, { CarouselWrapper, PrevBtn, NextBtn , Pagination } from "./Carousel";
import React, { useState, useContext } from "react";
import iconNext from './../images/icon-next.svg';
import iconPrev from './../images/icon-previous.svg';
import iconPlus from './../images/icon-plus.svg';
import iconMinus from './../images/icon-minus.svg';
import { cartContext } from "../store/cart";
import { LightBoxProvider } from "../store/lightBox";
import { productContext } from "../store/product";
import LightBox  from "./lightbox";



export const Product = () => {

    const [productCounter, setProductCounter] = useState(0);
    const { addItem } = useContext(cartContext);
    const { description , name , price , discount , isDiscount, picture , productId} = useContext(productContext)
    

    return (
        <LightBoxProvider>
            <div className="flex flex-col justify-between max-w-[1013px] min-h-[80vh] lg:mx-auto lg:items-center lg:flex-row  font-kumbhSans">
                <div className="w-full pt-10 lg:pt-0 lg:max-w-[445px]">
                    <Carousel isHavePopup={true}>
                        <CarouselWrapper>
                            <PrevBtn className="absolute top-1/2 left-2 w-10 h-10 rounded-full inline-grid place-content-center lg:hidden   bg-white ">
                                <img className="w-2 h-3" src={iconPrev} alt="prev" />
                            </PrevBtn>
                            <NextBtn className="absolute top-1/2 right-2 w-10 h-10 rounded-full inline-grid place-content-center lg:hidden  bg-white ">
                                <img className="w-2 h-3" src={iconNext} alt="next" />
                            </NextBtn>
                        </CarouselWrapper>
                        <Pagination />
                        
                        <LightBox />
                    </Carousel>
                </div>

                

                <section className="p-6 lg:max-w-[445px] lg:p-0">
                    <div className="">
                        <h3 className=" uppercase text-sm tracking-wider mb-2 lg:mb-6 font-extrabold text-orange-400">sneaker company</h3>
                        <h1 className="text-3xl lg:text-5xl lg:mb-11 capitalize font-extrabold">{name}</h1>
                        <p className="font-normal mt-4 opacity-40">{description}</p>
                    </div>
                    <div className="flex mt-7 lg:flex-col justify-between gap-2 items-start">
                        {isDiscount ?
                            <>
                                <div className="flex">
                                    <h1 className="text-3xl  leading-none font-bold">{'$' + (price - (price * discount / 100)).toFixed(2)}</h1>
                                    <p className="px-2 text-base py-[1px] ml-4 font-bold text-Orange bg-pale-orange rounded-lg">
                                        {discount + '%'}
                                    </p>
                                </div>
                                <p className="font-bold line-through text-lg decoration-black text-grayishblue  ">{"$" + price.toFixed(2)}</p>
                            </>
                            :
                            <>
                                <h1 className="text-3xl leading-none font-extrabold">{'$' + price.toFixed(2)}</h1>
                            </>
                        }

                    </div>
                    <div className="flex flex-col items-start lg:flex-row gap-4 mt-7">
                        <div className="flex px-4 py-4 w-full lg:w-40 justify-between bg-light-grayishblue rounded-lg">
                            <button onClick={() => setProductCounter(e => e > 0 ? e - 1 : 0)}><img src={iconMinus} className="w-3 h-auto" alt="" /></button>
                            <span className="font-bold text-lg">{productCounter}</span>
                            <button onClick={() => setProductCounter(e => e + 1)}><img src={iconPlus} alt="" /></button>
                        </div>
                        <button className=" bg-Orange hover:bg-orange-300 w-full  lg:w-2/3 transition-colors duration-300 text-white inline-flex justify-center gap-4 py-4 rounded-lg text-lg font-semibold  items-center"
                            onClick={() => {
                                if (productCounter > 0) {
                                    addItem({
                                        productName: name,
                                        price: isDiscount ? (price - (discount * price / 100)) : price,
                                        quantities: productCounter,
                                        productId: productId,
                                        img: picture[0]
                                    });
                                    setProductCounter(0)
                                }
                            }}>
                            <svg className="fill-white" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero" /></svg>
                            Add to cart</button>

                    </div>
                </section>
            </div>
        </LightBoxProvider>
        
   
    );
};
