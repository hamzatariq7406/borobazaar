import SectionHeader from '@components/common/section-header';
import ProductCard from '@components/product/product-cards/product-card';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import { Product } from '@framework/types';
import Alert from '@components/ui/alert';

interface ProductsProps {
  sectionHeading: string;
  sectionSubHeading?: string;
  headingPosition?: 'left' | 'center';
  className?: string;
  products?: any;
  loading: boolean;
  error?: string;
  limit?: number;
  uniqueKey?: string;
  currentCategory?:string
}

const ProductsGridBlock: React.FC<ProductsProps> = ({
  sectionHeading,
  sectionSubHeading,
  headingPosition = 'center',
  className = 'mb-12 lg:mb-14 xl:mb-16',
  products,
  loading,
  error,
  limit,
  uniqueKey,
  currentCategory
}) => {
  return (
    <div className={`${className}`}>
      <SectionHeader
        subDomainHeading={`Best ${currentCategory?.toUpperCase()} products near you`}
        sectionHeading={sectionHeading}
        sectionSubHeading={sectionSubHeading}
        headingPosition={headingPosition}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-3 md:gap-4 2xl:gap-5">
        {error ? (
          <Alert message={error} className="col-span-full" />
        ) : loading && !products?.length ? (
          Array.from({ length: limit! }).map((_, idx) => (
            <ProductCardLoader
              key={`${uniqueKey}-${idx}`}
              uniqueKey={`${uniqueKey}-${idx}`}
            />
          ))
        ) : (
          products?.map((product: any) => (
            <ProductCard key={`${uniqueKey}-${product.id}`} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsGridBlock;
