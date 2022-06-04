import BannerGridTwo from '@components/common/banner-grid-two';
import { bannerGridMediumTwo as bannersMedium } from '@framework/static/banner';
import { bannerDiscount } from '@framework/static/banner';
import MovingBanner from '@components/common/moving-banner/moving-banner';
import BannerAllCarousel from '@components/common/banner-all-carousel';
import { useCategoriesQuery } from '@framework/category/get-all-categories';
import CategoryDropdownSidebar from '@components/category/category-dropdown-sidebar';
import CategoryListCard from '@components/cards/category-list-card';
import { ROUTES } from '@utils/routes';
import cn from 'classnames';
import { LIMITS } from '@framework/utils/limits';

interface Props {
  className?: string;
}

const HeroBannerWithCategory: React.FC<Props> = ({
  className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20',
}) => {
  const { data } = useCategoriesQuery({
    limit: LIMITS.CATEGORIES_LIMITS,
  });


  return (
    <div className={`xl:flex md:pb-2.5 ${className}`}>
      <div className="hidden xl:block flex-shrink-0 pe-8 xl:pe-16 xl:w-[400px] pt-[1px]">
        <div className="border border-skin-base rounded-md flex flex-col h-full justify-between">


          <div className="flex items-center" style={{height:'80px', backgroundColor:'#02b290'}}>
            <div
              className={cn('inline-flex flex-shrink-0 w-9 h-9', {
                '2xl:w-12 3xl:w-auto 2xl:h-12 3xl:h-auto': 'default',
              })}
            >
              <img src="/tiles.png" style={{ width: '35px', height: '35px' , margin:'15%' }} alt={"alt"} />
            </div>
            <h3 className="text-15px text-skin-base capitalize ps-2.5 md:ps-4 2xl:ps-3 3xl:ps-4" style={{color:'white',fontSize:'1.4vw',fontWeight:'bold'}}>
              Browse Categories
            </h3>
          </div>


          <CategoryDropdownSidebar className="flex-shrink-0 pe-8 xl:pe-16 hidden lg:block w-80 xl:w-[400px]" />
        </div>
      </div>
      <div className="trendy-main-content w-full xl:-ms-8">
        <MovingBanner />
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
