type SortContentProps = {
  children?: React.ReactNode;
};
export default function FilterSortContent({ children }: SortContentProps) {
  return <div className="my-12 flex flex-col gap-6">{children}</div>;
}
