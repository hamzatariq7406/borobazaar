import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchAddress = async () => {
  let user: any = null;
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user") || "")
  }

  const { data } = await axios.get("https://server.kahfmall.com/api/address", {
    headers: { Authorization: `Bearer ${user.token}` }
  })
  return {
    data: data,
  };
};

const useAddressQuery = () => {
  return useQuery([API_ENDPOINTS.ADDRESS], fetchAddress);
};

export { useAddressQuery, fetchAddress };
