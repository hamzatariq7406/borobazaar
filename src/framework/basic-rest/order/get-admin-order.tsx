import { Order } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchOrder = async (_id: string) => {
    let user = null;
    if (localStorage.getItem("user")) {
        user = JSON.parse(localStorage.getItem("user") || "")
    }
    const { data } = await axios.get(`https://server.kahfmall.com/api/orders/${_id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
    });
    return data;
};
export const useOrderQuery = (id: string) => {
    return useQuery<Order, Error>([API_ENDPOINTS.ORDER, id], () =>
        fetchOrder(id)
    );
};
