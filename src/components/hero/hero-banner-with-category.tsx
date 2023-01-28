import BannerGridTwo from '@components/common/banner-grid-two';
import { bannerGridMediumTwo as bannersMedium } from '@framework/static/banner';
import MovingBanner from '@components/common/moving-banner/moving-banner';
import BannerAllCarousel from '@components/common/banner-all-carousel';
import { useCategoriesQuery } from '@framework/category/get-all-categories';
import CategoryDropdownSidebar from '@components/category/category-dropdown-sidebar';
import CategoryListCard from '@components/cards/category-list-card';
import { ROUTES } from '@utils/routes';
import cn from 'classnames';
import { LIMITS } from '@framework/utils/limits';
import FeatureCarousel from '@components/common/featured-carousel';

interface Props {
  className?: string;
  subdomain?: any;
}

const HeroBannerWithCategory: React.FC<Props> = ({
  className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20',
  subdomain
}: any) => {
  const { data } = useCategoriesQuery({
    limit: LIMITS.CATEGORIES_LIMITS,
  });



  const bannerDiscount = [
    {
      id: 1,
      title: 'Up to RM10 rebate on groceries!',
      slug: '/search',
      image: {
        mobile: {
          url: `/assets/images/${subdomain}-crousel1.jpg`,
          width: 475,
          height: 250,
        },
        desktop: {
          url: `/assets/images/${subdomain}-crousel1.jpg`,
          width: 475,
          height: 250,
        },
      },
    },
    {
      id: 2,
      title: 'Up to 50% off',
      slug: '/search',
      image: {
        mobile: {
          url: `/assets/images/${subdomain}-crousel2.jpg`,
          width: 475,
          height: 250,
        },
        desktop: {
          url: `/assets/images/${subdomain}-crousel2.jpg`,
          width: 475,
          height: 250,
        },
      },
    },
    {
      id: 3,
      title: 'Green tea now with Immunity power',
      slug: '/search',
      image: {
        mobile: {
          url: `/assets/images/${subdomain}-crousel3.jpg`,
          width: 475,
          height: 250,
        },
        desktop: {
          url: `/assets/images/${subdomain}-crousel3.jpg`,
          width: 475,
          height: 250,
        },
      },
    }
  ];



  return (
    <div className={`xl:flex md:pb-2.5 ${className}`}>
      <div className="hidden xl:block flex-shrink-0 pe-8 xl:pe-16 xl:w-[400px] pt-[1px]">
        <div className="border border-skin-base rounded-md flex flex-col justify-between" style={{ marginTop: 45 }}>
          <FeatureCarousel />
        </div>
      </div>
      <div className="trendy-main-content w-full xl:-ms-8">
        <MovingBanner subdomain={subdomain} />
        <BannerAllCarousel
          data={bannerDiscount}
          buttonSize="small"
          className="mb-0"
        />
      </div>
    </div>
  );
};

export default HeroBannerWithCategory;
