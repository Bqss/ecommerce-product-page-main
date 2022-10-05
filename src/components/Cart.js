import { cartContext } from "../store/cart";
import { useContext , forwardRef } from "react";
import CartItem from "./cartItems";



const cartActive = "visible opacity-100";
const cartHidden = "invisible opacity-0";

const Cart = forwardRef((props, ref) => {
    const { cartItems } = useContext(cartContext);
    const { isOpen } = props;
    return (
        <div className={'absolute z-10 bg-white min-h-[255px] flex flex-col w-[97%] lg:w-[365px] left-1/2 lg:right-0 lg:translate-x-0 lg:left-auto lg:top-14  top-20 shadow-2xl  rounded-lg  -translate-x-1/2 transition-all duration-300 ' + (isOpen ? cartActive : cartHidden)}  ref={ref} >
            <div className='p-6 py-4 border-b border-gray-200'><h3 className='font-extrabold'>Cart</h3></div>
            <div className='p-6 flex flex-col flex-auto items-center justify-center'>
                {cartItems.length > 0 ?
                    <>
                        {
                            cartItems.map(e => <CartItem key={e.productId} data={e} />)
                        }
                        <button className='w-full py-4 text-base font-bold  bg-Orange hover:bg-orange-300 transition-colors duration-300   rounded-lg mt-6 text-white'>Checkout</button>
                    </> :
                    <span className='font-bold text-gray-500'>Your cart is empty.</span>
                }
            </div>
        </div>
    )
})

export default Cart;