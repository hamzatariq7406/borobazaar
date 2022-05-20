import { useUI } from '@contexts/ui.context';
import Cookies from 'js-cookie';
import { useMutation } from 'react-query';

export interface SignUpInputType {
    productName: string;
    tags: string;
    listPrice: string;
    salePrice: string;
    mainImage: string;
    quantity: number;
    otherImage1: string;
    otherImage2: string;
    description: string;
    category: string;
    subCategory:string;
}

