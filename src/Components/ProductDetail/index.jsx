import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div className='cursor-pointer'
          onClick={() => context.closeProductDetail()}>
          <XMarkIcon className='h-6 w-6' />
        </div>
      </div>
    </aside>
  )
}

export default ProductDetail