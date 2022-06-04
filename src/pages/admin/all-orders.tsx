import React from 'react';
import Layout from '@components/layout/layout';
import OrderTable from '@components/order/order-table-admin';
import { useOrdersQuery } from '@framework/order/get-all-orders';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@components/seo/seo';

// props change to orders.

export default function OrdersTablePage() {
    const { data, isLoading } = useOrdersQuery({});
    return (
        <>
            <Seo
                title="Orders"
                description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
                path="my-account/orders"
            />
            <div style={{margin:'0% 10%'}}>
                {!isLoading ? (
                    <OrderTable orders={data?.data} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
}

OrdersTablePage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'forms',
                'menu',
                'footer',
            ])),
        },
    };
};
