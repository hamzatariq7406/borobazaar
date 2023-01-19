import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchBestSellerGroceryProducts = async ({ queryKey }: any) => {

  if (window?.location) {
    let category = ""
    const subdomain = window?.location?.hostname?.split('.')[0];

    if (subdomain === "home") {
      category = 'Home & Kitchen';
    } else if (subdomain === "pets") {
      category = "Pet Supplies"
    } else if (subdomain === "sports") {
      category = "Sports & Outdoors"
    } else if (subdomain === "babyproducts") {
      category = "Baby Products"
    } else if (subdomain === "toys") {
      category = "Toys & Games"
    } else if (subdomain === "stationery") {
      category = "Stationery & Office Supplies"
    } else if (subdomain === "lawn") {
      category = "Patio,Lawn & Garden"
    } else if (subdomain === "tools") {
      category = "Tools & Home Improvements"
    } else if (subdomain === "gadgets") {
      category = "Gadgets"
    } else if (subdomain === "accessories") {
      category = "Accessories"
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
