import { useEffect, useState } from "react";
import Filter from "@/components/Filter";
import Sort from "@/components/Sort";

type FilterOption = "price" | "availability" | "rating" | null;
type SortOption =
  | "best-sellers"
  | "low-to-high"
  | "high-to-low"
  | "name"
  | "height"
  | "depth"
  | null;
export default function Ack() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeClearing, setActiveClearing] = useState(false);
  const [filterSelectedOptions, setFilterSelectedOptions] =
    useState<FilterOption>(null);
  const [sortSelectedOptions, setSortSelectedOptions] =
    useState<SortOption[]>();
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const handleSortAction = async (order: any) => {
    const queryParams = new URLSearchParams({ order: "asc" }).toString();
    try {
      const req = await fetch(`http://localhost:5001/sort?${queryParams}`);
      const response = await req.json();
      const data = response.names;

      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleFilterAction = async () => {
    const queryParams = new URLSearchParams();
    filterOptions.forEach((option: any) => {
      queryParams.append(option.value, option.order);
    });
    try {
      const req = await fetch(
        `http://localhost:5001/filter?${queryParams.toString()}`,
      );
      const response = req.json();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const sortOptions = [
    { label: "Best Sellers", value: "best-sellers", order: "" },
    { label: "Sort by Price: Low To High", value: "low-to-high", order: "" },
    { label: "Sort by Price: High To Low", value: "high-to-low", order: "" },
    { label: "Name", value: "name", order: "" },
    { label: "Availablility", value: "availablility", order: "" },
    { label: "Height", value: "height", order: "" },
    { label: "Depth", value: "depth", order: "" },
  ];
  const filterOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
  ];

  const handleZayn = (val: {}[]) => val.sort();

  const handleSortChange = (value: string) => {
    filterSelectedOptions(value);
    // Any additional sorting logic you want to apply
  };

  const handleFilterChange = (updatedOptions: any) => {
    sortSelectedOptions(updatedOptions);
  };

  useEffect(() => {
    document.body.style.overflow = isModalVisible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isModalVisible]);

  return (
    <div className="h-[100dvh] bg-black">
      <div className="button-container flex items-center justify-center py-12">
        <button
          className="text-purple flex items-center justify-center rounded-xl bg-white px-2 py-4 text-center font-satoshi text-base font-medium"
          onClick={openModal}
        >
          Click for modal
        </button>
      </div>

      {isModalVisible && (
        <div
          className="fixed inset-0 flex items-end justify-center bg-gray-800 bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <SelectDropDown
              label={"brand"}
              options={["s", "m", "l"]}
              onSelect={closeModal}
            /> */}
            <div className="my-12 flex flex-col gap-12">
              <Sort
                options={sortOptions}
                selectedOption={selectedOption}
                sortHeader="Sort By"
                onChange={handleSortChange}
                sortAction={handleSortAction}
              />
              <Filter
                options={filterOptions}
                selectedOptions={selectedOptions}
                filterHeader="Categories"
                onChange={handleFilterChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <button className="w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white">
                Show Results []
              </button>
              <button
                className={`w-full rounded-xl px-2 py-3 font-satoshi text-base ${activeClearing ? "bg-black" : "bg-red-500"}`}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
