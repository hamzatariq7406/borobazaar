import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchBestSellerGroceryProducts = async ({ queryKey }: any) => {

  if (window?.location) {
    let category = ""
    if (window?.location?.hostname?.split('.')[0] === "home") {
      category = 'Home & Kitchen';
    }
    const [_key, _params] = queryKey;
    const { data } = await http.post(`https://server.kahfmall.com/api/products/product-by-category`, { category })
    return data as Product[];
  }
  return []
};
export const useBestSellerGroceryProductsQuery = (
  options: QueryOptionsType
) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.BEST_SELLER_GROCERY_PRODUCTS, options],
    fetchBestSellerGroceryProducts
  );
};
