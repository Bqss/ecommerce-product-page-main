import React, { useContext } from 'react'
import iconDelete from './../images/icon-delete.svg'
import { cartContext } from '../store/cart'
const CartItem = ({ data }) => {
    const { deleteItem } = useContext(cartContext);
    return (
        <div className='flex w-full relative items-center'>
            <img src={data.img} alt="img" className='w-[50px] h-[50px] rounded-md' />
            <div className='ml-4 inline-flex  flex-col overflow-hidden justify-center '>
                <span className='truncate capitalize opacity-50 font-medium  max-w-[90%]'>{data.productName + 'kdsfkajhdsfk'}</span>
                <p className='inline '><span className='opacity-50 font-medium mr-1'>{'$' + data.price.toFixed(2) + ' x ' + data.quantities}</span> <span className='font-extrabold opacity-100'>{' $'+ (data.price * data.quantities).toFixed(2)}</span></p>
            </div>
            <button className='absolute right-0' onClick={()=>deleteItem(data.productId)}>
                <img className='w3 h-4' src={iconDelete} alt="delete" />
            </button>
        </div>
    )
}

export default CartItem