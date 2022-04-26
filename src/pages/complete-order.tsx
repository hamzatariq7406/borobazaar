import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import OrderInformation from '@components/order/order-information';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Divider from '@components/ui/divider';
import { useEffect } from 'react';
import { useCart } from '@contexts/cart/cart.context';
import Seo from '@components/seo/seo';

export default function Order() {
  const context: any = useCart();
  let items: any = null;


  if (typeof window !== 'undefined') {
    if (context.items.length > 0) {
      localStorage.setItem("items", JSON.stringify(context.items));
      localStorage.setItem("total", context.total);
    }
  }

  useEffect(() => {
    context.resetCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
      {typeof window !== 'undefined' ?
        <div>
          <Seo
            title="Order"
            description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
            path="complete-order"
          />
          <Divider />
          <Container>
            {/* @ts-ignore */}
            <OrderInformation items={JSON.parse(localStorage.getItem("items"))} totals={localStorage.getItem("total")} />
          </Container>
          <Divider /></div>
        : null}
    </>
  );
}

Order.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
