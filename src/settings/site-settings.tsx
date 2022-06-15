import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';

export const siteSettings = {
  name: 'Kahf Mall',
  description:
    'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
  author: {
    name: 'RedQ, Inc.',
    websiteUrl: 'https://redq.io',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.png',
    alt: 'kahfmall',
    href: '/',
    width: 90,
    height: 90,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      // {
      //   id: 1,
      //   path: '/',
      //   label: 'menu-demos',
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: '/',
      //       label: 'menu-modern',
      //     },
      //     {
      //       id: 2,
      //       path: '/classic',
      //       label: 'menu-classic',
      //     },
      //     {
      //       id: 3,
      //       path: '/vintage',
      //       label: 'menu-vintage',
      //     },
      //     {
      //       id: 4,
      //       path: '/standard',
      //       label: 'menu-standard',
      //     },
      //     {
      //       id: 5,
      //       path: '/minimal',
      //       label: 'menu-minimal',
      //     },
      //     {
      //       id: 6,
      //       path: '/trendy',
      //       label: 'menu-trendy',
      //     },
      //     {
      //       id: 7,
      //       path: '/elegant',
      //       label: 'menu-elegant',
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   path: '/search',
      //   label: 'menu-categories',
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: '/search',
      //       label: 'Makeup',
      //     },
      //     {
      //       id: 2,
      //       path: '/search',
      //       label: 'menu-diet-nutrition',
      //     },
      //     {
      //       id: 3,
      //       path: '/search',
      //       label: 'Skin care',
      //     },
      //     {
      //       id: 4,
      //       path: '/search',
      //       label: 'Hair',
      //     },
      //     {
      //       id: 5,
      //       path: '/search',
      //       label: 'Tooth and Brushes',
      //     },
      //   ],
      // },
      {
        id: 4,
        path: '/',
        label: 'Home',
      },
      // {
      //   id:5,
      //   path:'/',
      //   label:'Shop Now'
      // },
      // {
      //   id: 5,
      //   path: '/shops/',
      //   label: 'menu-shops',
      // },
      {
        id:6,
        path:'/contact-us',
        label:'Contact Us'
      },
      {
        id:7,
        path:'/about-us',
        label:'About'
      }
      // {
      //   id: 6,
      //   path: '/',
      //   label: 'menu-pages',
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: '/',
      //       label: 'menu-users',
      //       subMenu: [
      //         {
      //           id: 1,
      //           path: '/my-account/account-settings',
      //           label: 'menu-my-account',
      //         },
      //         {
      //           id: 2,
      //           path: '/signin',
      //           label: 'menu-sign-in',
      //         },
      //         {
      //           id: 3,
      //           path: '/signup',
      //           label: 'menu-sign-up',
      //         },
      //       ],
      //     },
      //     {
      //       id: 2,
      //       path: '/faq',
      //       label: 'menu-faq',
      //     },
      //     {
      //       id: 3,
      //       path: '/about-us',
      //       label: 'menu-about-us',
      //     },
      //     {
      //       id: 4,
      //       path: '/privacy',
      //       label: 'menu-privacy-policy',
      //     },
      //     {
      //       id: 5,
      //       path: '/terms',
      //       label: 'menu-terms-condition',
      //     },
      //     {
      //       id: 6,
      //       path: '/contact-us',
      //       label: 'menu-contact-us',
      //     },
      //     {
      //       id: 7,
      //       path: '/checkout',
      //       label: 'menu-checkout',
      //     },
      //     {
      //       id: 8,
      //       path: '/404',
      //       label: 'menu-404',
      //     },
      //   ],
      // },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag />,
      },
    ],
  },
};
