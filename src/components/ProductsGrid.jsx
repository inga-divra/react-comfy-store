import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils"


const ProductsGrid = () => {
    const { products } = useLoaderData()

    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((product) => {
                const { title, price, image } = product.attributes
                const euroAmount = formatPrice(price)
                return <Link
                    className='cart w-full shadow-xl hover:shadow-2xl transition duration-300'
                    key={product.id}
                    to={`/products/${product.id}`}>
                    <figure className='px-4 pt-4'>
                        <img
                            className='rounded-xl h-64 md:h-48 w-full object-cover'
                            src={image}
                            alt={title} />
                    </figure>
                    <div className='card-body items-center text-center'>
                        <h2 className='card-title capitalize tracking-wider'>
                            {title}
                        </h2>
                        <span className='text-secondary'>
                            {euroAmount}
                        </span>
                    </div>
                </Link>
            })}
        </div>
    )
}

export default ProductsGrid