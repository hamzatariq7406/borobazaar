import Link from 'next/link';
import Image from '@components/ui/image';
import { IoIosArrowForward } from 'react-icons/io';
import { Category } from '@framework/types';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { LinkProps } from 'next/link';

interface Props {
  category: any;
  href: any;
  className?: string;
  variant?: 'default' | 'small';
}

const CategoryListCard: React.FC<Props> = ({
  category,
  className,
  href,
  variant = 'default',
}) => {
  const name = category.displayName;
  const icon = category.thumbImage;
  const items = category.children;

  const { t } = useTranslation('common');

  return (
    <Link href={{ pathname: href.pathname, query: { category: name } }}>
      <a
        className={cn(
          'group flex justify-between items-center px-3.5 2xl:px-4 transition',
          {
            'py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3': variant === 'default',
            'py-2 3xl:py-3': variant === 'small',
          },
          className
        )}
      >
        <div className="flex items-center">
          <div
            className={cn('inline-flex flex-shrink-0 w-9 h-9', {
              '2xl:w-12 3xl:w-auto 2xl:h-12 3xl:h-auto': variant === 'default',
            })}
          >
            {icon ? <img src={icon} style={{ width: '40px', height: '40px' }} alt={name} /> : null}

            {/* <Image
              src={icon}
              alt={name || t('text-category-thumbnail')}
              width={40}
              height={40}
            /> */}
          </div>
          <h3 className="text-15px text-skin-base capitalize ps-2.5 md:ps-4 2xl:ps-3 3xl:ps-4">
            {name}
          </h3>
        </div>

        {
          items ? <div className="flex items-center transition-all transform group-hover:translate-x-1">
            <IoIosArrowForward className="text-base text-skin-base text-opacity-40" />
          </div> : null
        }

        {Array.isArray(items) ? (
          <div className="hidden md:block absolute z-10 left-full top-0 w-full h-full bg-skin-fill border border-skin-base rounded-md opacity-0 invisible">
            <ul key="content" className="text-xs py-1.5">
              {items?.map((currentItem) => {
                <a href="#">{currentItem.name}</a>
                // const childDepth = depth + 1;
                // return (
                //   <SidebarMenuItem
                //     key={`${currentItem.name}${currentItem.slug}`}
                //     item={currentItem}
                //     depth={childDepth}
                //     className={cn(
                //       'text-sm px-3 py-3 pe-4 text-skin-muted hover:text-skin-primary border-b border-skin-base last:border-b-0 mb-0.5'
                //     )}
                //   />
                // );
              })}
            </ul>
          </div>
        ) : null}

      </a>
    </Link>
  );
};

export default CategoryListCard;
