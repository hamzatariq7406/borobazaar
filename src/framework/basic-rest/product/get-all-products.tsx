import { QueryOptionsType, Product } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import shuffle from 'lodash/shuffle';
import { useInfiniteQuery } from 'react-query';
type PaginatedProduct = {
  data: Product[];
  paginatorInfo: any;
};
const fetchProducts = async ({ queryKey }: any) => {
  const pathName = queryKey[1].category;
  const [_key, _params] = queryKey;

  const { data } = await http.post(`https://server.kahfmall.com/api/products/product-by-subcategory`, { category: _params.category });
  return {
    data: shuffle(data) as Product[],
    paginatorInfo: {
      nextPageUrl: '',
    },
  };
};

const useProductsQuery = (options: QueryOptionsType) => {
  return useInfiniteQuery<PaginatedProduct, Error>(
    [API_ENDPOINTS.PRODUCTS, options],
    fetchProducts,
    // {
    //   getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    // }
  );
};

export { useProductsQuery, fetchProducts };
