import { useSelector } from "react-redux"
import { formatPrice } from "../utils"

const CartTotals = () => {
    const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState)
    return <div className='card bg-base-200'>
        <div className='card-body'>
            {/* SUBTOTAL */}
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span className='capitalize'>subtotal</span>
                <span className='font-medium'>{formatPrice(cartTotal)}</span>
            </p>
            {/* SHIPPING */}
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span className='capitalize'>shipping</span>
                <span className='font-medium'>{formatPrice(shipping)}</span>
            </p>
            {/* TAX */}
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span className='capitalize'>Tax</span>
                <span className='font-medium'>{formatPrice(tax)}</span>
            </p>
            {/* ORDER TOTAL */}
            <p className='flex justify-between text-sm mt-4  pb-2'>
                <span className='capitalize'>order total</span>
                <span className='font-medium'>{formatPrice(orderTotal)}</span>
            </p>
        </div>
    </div>
}

export default CartTotals