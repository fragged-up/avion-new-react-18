import { cn } from "@/utils";

interface AspectRatioProps {
  ratio: number; // Aspect ratio, e.g., 16/9
  children?: React.ReactNode; // Content to be displayed if no image is provided
  className?: string; // Optional additional class names
  image?: string; // Optional image URL
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children, className, image }) => {
  const paddingBottom = (1 / ratio) * 100; // Calculating the padding for the aspect ratio

  return (
    <div
      className={cn('relative w-full', className)} // Ensure it takes up full width
      style={{ paddingBottom: `${paddingBottom}%` }}
    >
      {image ? (
        <img
          src={image}
          alt="product"
          className="absolute inset-0 object-cover w-full h-full" // Ensuring the image fills the box
        />
      ) : (
        <div className="absolute inset-0">{children}</div>
      )}
    </div>
  );
};
