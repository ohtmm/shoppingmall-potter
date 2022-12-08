import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCards from '../../../components/ProductCards/ProductCards';
import { ProductsContext } from '../../../lib/context/productsContext';
import { sortProducts } from '../../../lib/utils/sortProducts';
import { CategorizedContainer } from './StyleComponents';

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const products = useContext(ProductsContext);
  const sorted = sortProducts(products, category);
  return (
    <CategorizedContainer>
      <ProductCards products={sorted} categorized />
    </CategorizedContainer>
  );
};

export default Products;
