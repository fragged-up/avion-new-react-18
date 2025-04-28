type SortFooterProps = {
  children?:React.ReactNode

};
export default function FilterSortFooter({ children }: SortFooterProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {children}
    </div>
  );
}
