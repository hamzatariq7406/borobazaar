import cn from 'classnames';
import Image from '@components/ui/image';
import usePrice from '@framework/product/use-price';
import { Product } from '@framework/types';
import { useModalAction } from '@components/common/modal/modal.context';
import useWindowSize from '@utils/use-window-size';
import PlusIcon from '@components/icons/plus-icon';
import { useCart } from '@contexts/cart/cart.context';
import { AddToCart } from '@components/product/add-to-cart';
import { useTranslation } from 'next-i18next';
import { productPlaceholder } from '@assets/placeholders';

interface ProductProps {
  product: any;
  className?: string;
}
function RenderPopupOrAddToCart({ data }: { data: Product }) {
  const { t } = useTranslation('common');
  let { product_type } = data ?? {};
  product_type = "variable";
  const quantity = data.reviews;
  const { width } = useWindowSize();
  const { openModal } = useModalAction();
  const iconSize = width! > 1024 ? '19' : '17';
  function handlePopupView() {
    openModal('PRODUCT_VIEW', data);
  }
  if (Number(quantity) < 1) {
    return (
      <span className="text-[11px] md:text-xs font-bold text-skin-inverted uppercase inline-block bg-skin-red rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
        {t('text-out-stock')}
      </span>
    );
  }
  if (product_type === 'variable') {
    return (
      <button
        className="inline-flex bg-skin-primary rounded-full w-8 lg:w-10 h-8 lg:h-10 text-skin-inverted text-4xl items-center justify-center focus:outline-none focus-visible:outline-none"
        aria-label="Count Button"
        onClick={handlePopupView}
      >
        <PlusIcon width={iconSize} height={iconSize} opacity="1" />
      </button>
    );
  }
  return <AddToCart data={data} />;
}
const ProductCard: React.FC<ProductProps> = ({ product, className }) => {
  //const { name, image, unit, product_type } = product ?? {};
  const name = product.productName;
  const image = product.heroImage;
  const unit = "1 each";
  const product_type = product.brandName;

  const { openModal } = useModalAction();
  const { t } = useTranslation('common');
  
  const { price, basePrice, discount } = usePrice({
    amount: product?.listPrice,
    baseAmount: product?.salePrice ? product?.salePrice : product?.listPrice,
    currencyCode: 'USD',
  });
  const { price: minPrice } = usePrice({
    amount: product?.salePrice ?? 0,
    currencyCode: 'USD',
  });
  const { price: maxPrice } = usePrice({
    amount: product?.salePrice ?? 0,
    currencyCode: 'USD',
  });



  function handlePopupView() {
    openModal('PRODUCT_VIEW', product);
  }
  return (
    <article
      className={cn(
        'flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full',
        className
      )}
      onClick={handlePopupView}
      title={name}
    >
      <div className="relative flex-shrink-0">
        <div className="flex overflow-hidden max-w-[230px] mx-auto transition duration-200 ease-in-out transform group-hover:scale-105 relative">
          <img
            src={image}
            alt={name || 'Product Image'}
            style={{ height: 200, width: 230 }}
            className="object-cover bg-skin-thumbnail"
          />
        </div>
        <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
          {discount && (
            <span className="text-[11px] md:text-xs font-bold text-skin-inverted uppercase inline-block bg-skin-primary rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
              {t('text-on-sale')}
            </span>
          )}
          <div className="inline-block product-count-button-position">
            <RenderPopupOrAddToCart data={product} />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
        <div className="space-s-2 mb-1 lg:mb-1.5">
          <span className="inline-block font-semibold text-sm sm:text-15px lg:text-base text-skin-base">
           $ {product_type === 'variable' ? `${minPrice} - ${maxPrice}` : product?.salePrice}
          </span>
          {product?.salePrice !== product?.listPrice && (
            <del className="text-sm text-skin-base text-opacity-70">
              {product?.listPrice}
            </del>
          )}
        </div>
        <h2 className="text-skin-base text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
          {name}
        </h2>
        <div className="text-13px sm:text-sm mt-auto">{unit}</div>
      </div>
    </article>
  );
};

export default ProductCard;
