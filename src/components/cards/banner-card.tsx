import Link from '@components/ui/link';
import Image from 'next/image';
import useWindowSize from '@utils/use-window-size';
import cn from 'classnames';

interface BannerProps {
  banner: any;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

const BannerCard: React.FC<BannerProps> = ({
  banner,
  className,
  variant = 'default',
  effectActive = true,
  classNameInner,
}) => {
  const { width } = useWindowSize();
  const { slug, title, image } = banner;
  const selectedImage = getImage(width!, image);
  return (
    <div className={cn('mx-auto', className)}>
      <div
        className={cn(
          'h-full group flex justify-center relative overflow-hidden',
          classNameInner
        )}
      >
        <img
          src={selectedImage.url}
          style={{ height: selectedImage.height, width: '100%' }}
          alt={title}
          className={cn('bg-skin-thumbnail  w-full', {
            'rounded-md': variant === 'rounded',
          })}
        />
        {effectActive && (
          <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
        )}
      </div>
    </div>
  );
};

export default BannerCard;
