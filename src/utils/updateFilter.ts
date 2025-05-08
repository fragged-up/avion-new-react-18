export const toggleSelection = <T>(currentSelection: T[], option: T): T[] => {
  const updatedFilters = currentSelection.includes(option)
    ? currentSelection.filter((item) => item !== option)
    : [...currentSelection, option];
  return updatedFilters;
};

