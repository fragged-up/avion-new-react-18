import { cn } from '@/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title?: string;
}

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

interface AsideProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fluid?: boolean;
  onClick?: () => void;
}

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  role?: string;
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  level?: 'p1' | 'p2' | 'p3' | 'p4';
  className?: string;
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Img: React.FC<ImgProps> = ({ className, ...rest }) => {
  return <img className={cn(className)} alt="product-card-image" {...rest} />;
};

export const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section className={cn('', className)} {...props}>
      {children}
    </section>
  );
};

export const Article: React.FC<ArticleProps> = ({ children, title, className, ...props }) => {
  return (
    <article className={cn('mb-8', className)} {...props}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </article>
  );
};

export const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <main className={cn('', className)} {...props}>
      {children}
    </main>
  );
};

export const Dialog: React.FC<DialogProps> = ({ children, className, open, ...props }) => {
  return (
    <dialog className={cn('', className)} open={open} {...props}>
      {children}
    </dialog>
  );
};

export const Aside: React.FC<AsideProps> = ({ children, className, ...props }) => {
  return (
    <aside className={cn('w-64 p-4 bg-gray-100 rounded-md', className)} {...props}>
      {children}
    </aside>
  );
};

export const LayoutHeader: React.FC<HeaderProps> = ({ children, className, ...props }) => {
  return (
    <header className={cn('', className)} {...props}>
      {children}
    </header>
  );
};

export const Nav: React.FC<NavProps> = ({ children, className, role = 'navigation', ...props }) => {
  return (
    <nav className={cn('w-full', className)} role={role} {...props}>
      {children}
    </nav>
  );
};

export const LayoutFooter: React.FC<FooterProps> = ({ children, className, ...props }) => {
  return (
    <footer className={cn('', className)} {...props}>
      {children}
    </footer>
  );
};

export const Container: React.FC<ContainerProps> = ({ children, className, fluid, ...props }) => {
  const baseClasses = cn('', fluid ? 'w-full' : 'max-w-7xl', className);
  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, level = 'p2', className, ...props }) => {
  const baseStyles = 'font-clash';
  const sizeStyles = {
    p1: 'text-sm md:text-base lg:text-lg',
    p2: 'text-base md:text-lg lg:text-xl',
    p3: 'text-lg md:text-xl lg:text-2xl',
    p4: 'text-xl md:text-2xl lg:text-3xl',
  };

  return (
    <p className={cn(baseStyles, sizeStyles[level], className)} {...props}>
      {children}
    </p>
  );
};

export const Heading: React.FC<HeadingProps> = ({ children, level = 'h1', className, ...props }) => {
  const Tag = level;
  const baseStyles = 'font-clash';
  const sizeStyles = {
    h1: 'text-2xl md:text-3xl lg:text-4xl',
    h2: 'text-xl md:text-2xl lg:text-3xl',
    h3: 'text-lg md:text-xl lg:text-2xl',
    h4: 'text-base md:text-lg lg:text-xl',
    h5: 'text-sm md:text-base lg:text-lg',
    h6: 'text-xs md:text-sm lg:text-base',
  };

  return (
    <Tag className={cn(baseStyles, sizeStyles[level], className)} {...props}>
      {children}
    </Tag>
  );
};
