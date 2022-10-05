import React, { createContext, useState } from "react";


const cartContext = createContext([]);


const CartDataProvider = ({ children}) => {
    const deleteItem = (itemsId) => {
        setTimeout(() => {
            setcartData(({ cartItems, ...another }) => {
                return {
                    ...another,
                    cartItems: [...cartItems.filter(e => e.productId !== itemsId)]
                }
            })
        }, 100);
    }

    const addItem = (data) => {
        setcartData(({ cartItems, ...another }) => {        
            if (cartItems.filter(e => e.productId === data.productId).length > 0) {
                return {
                    ...another,
                    cartItems: [...cartItems.map(f => {
                        if (f.productId === data.productId) {
                            const { quantities, ...other } = f;
                            return {
                                ...other,
                                quantities : quantities + data.quantities
                            }
                        } else {
                            return f;
                        }
                    })]
                }
            } else {
                return {
                    ...another,
                    cartItems: [...cartItems, data]
                } 
            }
        })
    }
    const [cardData, setcartData] = useState({
        cartItems: [],
        addItem: addItem,
        deleteItem: deleteItem
    })
    
    return (
        <>
            <cartContext.Provider value={cardData}>
                {children}
            </cartContext.Provider>
        </>
    )
}
export { cartContext, CartDataProvider };
