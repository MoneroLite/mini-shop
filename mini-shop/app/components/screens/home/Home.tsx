import { FC } from 'react'
import CartDropdown from './cart-dropdown/CartDropdown'
import ProductItem from './ProductItem'
import { useGetProductsQuery } from '../../../store/products/product.api'
import { IProduct } from '../../../store/products/product.types'

const Home: FC = () => {
	const {data, isLoading, error} = useGetProductsQuery(10)

	return (
		<div>
			<div className='flex justify-between items-center mb-10'>
				<h1 className='text-2xl text-green-900 font-medium'>
					Let&apos;s find your products!
				</h1>
				<CartDropdown />
			</div>

			{isLoading ? 'loading...' 
				: error ? <div className='text-red'>{error}</div>
				: <div className='flex flex-wrap justify-between'>
					{data?.map((product: IProduct) => (
						<ProductItem key={product.id} product={product} />
					))}
				  </div>
			}			
		</div>
	)
}

export default Home
