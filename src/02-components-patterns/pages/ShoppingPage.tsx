import ProductCard from '../components';
import { ProductImage, ProductTitle, ProductButtons } from '../components';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>      
      <hr />
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title='Taza mamalona' />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}

export default ShoppingPage