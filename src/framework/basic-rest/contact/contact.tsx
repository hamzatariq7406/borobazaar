import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchContact = async () => {
  let user: any = null;
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user") || "")
  }
  const { data } = await axios.get("https://kahf-mall.herokuapp.com/api/contact", {
    headers: { Authorization: `Bearer ${user.token}` }
  });

  return {
    data: data,
  }
};

const useContactQuery = () => {
  return useQuery([API_ENDPOINTS.CONTACT], fetchContact);
};

export { useContactQuery, fetchContact };
