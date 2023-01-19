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
  let response: any = null;

  useEffect(() => {
    setCurrentCategory(window.location.hostname.split('.')[0]);
    let category = "";

    if (window.location.hostname.split('.')[0] === "home") {
      category = 'Home & Kitchen';
    }
    response = useBestSellerGroceryProductsQuery({
      limit: LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS,
      category: category
    });
  }, [])

  return (
    <>
      {currentCategory &&
        <ProductsGridBlock
          sectionHeading="text-best-grocery-near-you"
          sectionSubHeading="text-fresh-grocery-items"
          className={className}
          currentCategory={currentCategory}
          products={response?.data}
          loading={response?.isLoading}
          error={response?.error?.message}
          limit={LIMITS.BEST_SELLER_GROCERY_PRODUCTS_LIMITS}
          uniqueKey="best-sellers"
        />
      }
    </>
  );
};
export default BestSellerGroceryProductFeed;
