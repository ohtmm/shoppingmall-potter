import { TProduct } from '../../pages/Products/NewProducts/NewProducts';
import ProductCard from '../ProductCard/ProductCard';
import { CategorizedCardContainer, HomeProductContainer } from './style';

type TProductCards = {
  products?: TProduct[] | null;
  categorized?: boolean;
};

const ProductCards = ({ products, categorized }: TProductCards) => {
  return (
    <>
      {!categorized ? (
        <HomeProductContainer>
          {products?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productId={product.id}
                productImg={product.photoURL}
                productName={product.name}
                productDescription={product.description}
                productPrice={product.price}
              />
            );
          })}
        </HomeProductContainer>
      ) : (
        <CategorizedCardContainer>
          {products?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productId={product.id}
                productImg={product.photoURL}
                productName={product.name}
                productDescription={product.description}
                productPrice={product.price}
              />
            );
          })}
        </CategorizedCardContainer>
      )}{' '}
    </>
  );
};
export default ProductCards;
