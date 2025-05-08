import { AvatarIcon } from "@/icons";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 'w-5 h-5',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
};

export const AvatarBadge = ({ src, alt = 'User', size = 'sm' }: AvatarProps) => {
  const imageSrc = src || AvatarIcon;
  const sizeClasses = sizeMap[size];

  return (
      <img
        src={imageSrc}
        alt={alt}
        className={`cursor-pointer rounded-full object-cover ${sizeClasses}`}
      />
  );
};
