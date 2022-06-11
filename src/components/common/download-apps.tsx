import Image from '@components/ui/image';
import cn from 'classnames';
import Link from '@components/ui/link';
import { useTranslation } from 'next-i18next';
const data = {
  title: 'app-heading',
  description: 'app-description',
  appImage: '/assets/images/app-thumbnail.png',
  appButtons: [
    {
      id: 1,
      slug: '/#',
      altText: 'button-app-store',
      appButton: '/assets/images/app-store.png',
      buttonWidth: 170,
      buttonHeight: 56,
    },
    {
      id: 2,
      slug: '/#',
      altText: 'button-play-store',
      appButton: '/assets/images/play-store.png',
      buttonWidth: 170,
      buttonHeight: 56,
    },
  ],
};

interface Props {
  className?: string;
}

const DownloadApps: React.FC<Props> = ({ className = 'pt-1.5 md:pt-0' }) => {
  const { appButtons, title, description, appImage } = data;
  const { t } = useTranslation('common');
  return (
    <div className={cn('bg-skin-three overflow-hidden', className)}>
      <img
        src="/assets/images/009.png"
        alt={t('text-app-thumbnail')}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default DownloadApps;
