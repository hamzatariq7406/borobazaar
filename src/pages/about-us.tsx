import Layout from '@components/layout/layout';
import Container from '@components/ui/container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import DownloadApps from '@components/common/download-apps';
import { aboutSetting } from '@settings/about-setting';
import Image from '@components/ui/image';
import Seo from '@components/seo/seo';

const backgroundThumbnail = '/assets/images/002.png';
const aboutUs1 = '/assets/images/007.png';
const aboutUs2 = '/assets/images/001.png';
const aboutUs3 = '/assets/images/about-us/3.png';
const aboutUs4 = '/assets/images/about-us/4.png';
const aboutUs5 = '/assets/images/about-us/5.png';
const aboutUs6 = '/assets/images/about-us/6.png';

export default function TermsPage() {
  const { t } = useTranslation('about');
  return (
    <>
      <Seo
        title="About Us"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="about-us"
      />
      {/* End of seo */}
      <div
        className="flex justify-center h-[250px] lg:h-96 2xl:h-[500px] w-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${"/assets/images/homeandkitchen-moving1.jpg"})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: "100%"
        }}
      ></div>
      <div className="py-8 lg:py-16 2xl:py-20">
        <Container>
          <div className="flex flex-col w-full mx-auto max-w-[1200px]">
            <h2 className="text-lg md:text-xl lg:text-[24px] text-skin-base font-semibold mb-4 lg:mb-7">
              {t(aboutSetting.titleOne)}
            </h2>
            <div
              className="text-skin-base opacity-70 text-sm leading-7 lg:text-15px lg:leading-loose"
              dangerouslySetInnerHTML={{
                __html: t(aboutSetting.descriptionOne),
              }}
            />

            {/* <div className="grid my-8 lg:my-14 grid-cols-2 gap-4">
              <img
                src={aboutUs1}
                alt={t('text-map')}
                className=" me-5"
                style={{ width: 576, height: 390 }}
              />
              <img
                src={aboutUs2}
                style={{ width: 576, height: 390 }}
                alt={t('text-map')}
                className=""
              />
            </div> */}
          </div>
        </Container>
      </div>

      <DownloadApps />
    </>
  );
}

TermsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'about',
        'footer',
      ])),
    },
  };
};
