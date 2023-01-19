import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useBestSellerGroceryProductsQuery } from '@framework/product/get-all-best-seller-grocery-products';
import ProductsGridBlock from '../products-grid-block';
import { LIMITS } from '@framework/utils/limits';

interface ProductFeedProps {
  className?: string;
}

const BestSellerGroceryProductFeed: FC<ProductFeedProps> = ({ className }) => {


  const [currentCategory, setCurrentCategory] = useState('');

  const { data, error, isLoading } = useBestSellerGroceryProductsQuery({
    limit: LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS
  });;

  useEffect(() => {
    setCurrentCategory(window.location.hostname.split('.')[0]);
  }, [])

  return (
    <>
      {currentCategory &&
        <ProductsGridBlock
          sectionHeading="text-best-grocery-near-you"
          sectionSubHeading="text-fresh-grocery-items"
          className={className}
          currentCategory={currentCategory}
          products={data}
          loading={isLoading}
          error={error?.message}
          limit={LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS}
          uniqueKey="best-sellers"
        />
      }
    </>
  );
};
export default BestSellerGroceryProductFeed;
