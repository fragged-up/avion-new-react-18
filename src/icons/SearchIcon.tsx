import { SearchBadgeIcon } from "@/icons";
export default function SearchIcon() {
  return (
      <div className="flex justify-center items-center cursor-pointer">
        <img src={SearchBadgeIcon} alt="search-icon" className="w-5 h-5 md:w-5 md:h-5 cursor-pointer" />
      </div>
  );
}
