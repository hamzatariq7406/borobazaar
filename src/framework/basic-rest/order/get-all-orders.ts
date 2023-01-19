import { QueryOptionsType, Order } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchOrders = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  let user = null;
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user") || "")
    }
  
  const { data } = await axios.get("https://server.kahfmall.com/api/orders/mine", {
    headers: { Authorization: `Bearer ${user.token}` }
  })
  return {
    data: data,
  };
};

const useOrdersQuery = (options: QueryOptionsType) => {
  return useQuery([API_ENDPOINTS.ORDERS, options], fetchOrders);
};

export { useOrdersQuery, fetchOrders };
