import { cn } from '@/utils';
import { useState } from 'react';
import fallbackImage from '@/assets/images/imageNotAvailable.png';

interface AspectRatioProps {
  ratio: number;
  children?: React.ReactNode;
  className?: string;
  image?: string;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children, className, image }) => {
  const [isFallback, setIsFallback] = useState(false);
  const paddingBottom = (1 / ratio) * 100;

  return (
    <div className={cn('relative w-full', className)} style={{ paddingBottom: `${paddingBottom}%` }}>
      {image ? (
        <img
          src={isFallback ? fallbackImage : image}
          alt="image"
          onError={() => setIsFallback(true)}
          className={cn('absolute inset-0 w-full h-full', isFallback ? 'object-fit' : 'object-cover')}
        />
      ) : (
        <div className="absolute inset-0">{children}</div>
      )}
    </div>
  );
};
