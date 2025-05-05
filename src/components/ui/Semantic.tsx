import { cn } from "@/utils";


interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    title?: string;
}

interface MainProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
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
    onClick?:()=>void;
}

// Reusable components with semantic HTML
export const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
    return (
        <section className={cn("py-6", className)} {...props}>
            {children}
        </section>
    );
};

export const Article: React.FC<ArticleProps> = ({ children, title, className, ...props }) => {
    return (
        <article className={cn("mb-8", className)} {...props}>
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            {children}
        </article>
    );
};

export const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
    return (
        <main className={cn("flex-1", className)} {...props}>
            {children}
        </main>
    );
};

export const Aside: React.FC<AsideProps> = ({ children, className, ...props }) => {
    return (
        <aside className={cn("w-64 p-4 bg-gray-100 rounded-md", className)} {...props}>
            {children}
        </aside>
    );
};

export const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => {
    return (
        <header className={cn("py-4 border-b border-gray-200", className)} {...props}>
            {children}
        </header>
    );
};

export const Footer: React.FC<FooterProps> = ({ children, className, ...props }) => {
    return (
        <footer className={cn("py-4 border-t border-gray-200 text-center text-gray-500", className)} {...props}>
            {children}
        </footer>
    );
};

export const Container: React.FC<ContainerProps> = ({ children, className, fluid, ...props }) => {
    const baseClasses = cn(
        "", // Default horizontal padding
        fluid ? "w-full" : "max-w-7xl", // Max width for standard container, w-full for fluid
        className
    );
    return (
        <div className={baseClasses} {...props}>
            {children}
        </div>
    );
};
