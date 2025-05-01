import { cn } from "@/utils";

interface AspectRatioProps {
  ratio: number;
  children?: React.ReactNode;
  className?: string
  image?: string;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children, className, image }) => {
  const paddingBottom = (1 / ratio) * 100;

  return (
    <div
      className={cn('relative w-full', className)}
      style={{ paddingBottom: `${paddingBottom}%` }}
    >
      {image ? (
        <img
          src={image}
          alt="product"
          className="absolute inset-0 object-cover w-full h-full"
        />
      ) : (
        <div className="absolute inset-0">{children}</div>
      )}
    </div>
  );
};
