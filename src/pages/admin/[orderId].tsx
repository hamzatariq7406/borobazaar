import { useEffect, useState } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import OrderDetails from '@components/order/order-detail-admin';
import { useOrderQuery } from '@framework/order/get-admin-order';
import { useRouter } from 'next/router';
import usePrice from '@framework/product/use-price';
import { useTranslation } from 'next-i18next';
import axios from 'axios';

export default function OrderInformation({ items, totals }: any) {
  const {
    query: { id },
  } = useRouter();
  const router = useRouter();

  const queryparam = router.query;
  const orderId: any = queryparam.orderId || null;

  const { t } = useTranslation('common');
  const { data, isLoading }: any = useOrderQuery(orderId);
  const { price: total } = usePrice(
    data && {
      amount: data.shipping_fee ? data.total + data.shipping_fee : data.total,
      currencyCode: 'USD',
    }
  );

  let user: any = null;

  if (isLoading) return <p>Loading...</p>;

  let today: any = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const someDate = new Date(data?.deliveredAt);
  const date = new Date(someDate.setDate(someDate.getDate())).toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })

  let status = "Running";
  if(data?.isDelivered){
    status = "Delivered";
  }

  return (
    <div className="xl:px-32 2xl:px-44 3xl:px-56 py-16 lg:py-20">

      <div className="border border-skin-base bg-skin-secondary px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-skin-base text-sm md:text-base mb-6 lg:mb-8">
        <span className="w-10 h-10 me-3 lg:me-4 rounded-full bg-skin-primary bg-opacity-20 flex items-center justify-center flex-shrink-0">
          <IoCheckmarkCircle className="w-5 h-5 text-skin-primary" />
        </span>
        {"Order Detail"}
      </div>

      <ul className="border border-skin-base bg-skin-secondary rounded-md flex flex-col md:flex-row mb-7 lg:mb-8 xl:mb-10">
        <li className="text-skin-base font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-skin-two px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-xs block text-skin-muted font-normal leading-5">
            {"Order Number"}:
          </span>
          {orderId?.substring(0, 7)}
        </li>
        <li className="text-skin-base font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-skin-muted font-normal leading-5">
            {"Delivery Date"}:
          </span>
          {date}
        </li>
        <li className="text-skin-base font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-skin-muted font-normal leading-5">
            {"Email"}:
          </span>
          {data?.user?.email}
        </li>
        <li className="text-skin-base font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-skin-muted font-normal leading-5">
            {"Total"}:
          </span>
          {`$${data?.totalPrice}`}
        </li>
        <li className="text-skin-base font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-skin-muted font-normal leading-5">
            {"Payment Method"}:
          </span>
          Card Payment
        </li>
      </ul>
      <OrderDetails 
      items={data?.orderItems} 
      totals={data?.totalPrice} 
      status={status}
      address={data?.address?.address?.formatted_address}
      user={data?.user}
      />
    </div>
  );
}
