type AvatarProps = {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
};

export const Avatar = ({ src, alt = 'User', size = 'md' }: AvatarProps) => {
  const imageSrc = src || '/anonymous.jpg';
  const sizeClasses = sizeMap[size];

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`rounded-full object-cover ${sizeClasses}`}
    />
  );
};
