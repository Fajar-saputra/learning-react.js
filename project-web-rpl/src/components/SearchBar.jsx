import iconSearch from "../assets/images/icons/iconSearch.png";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="search-bar-input"
        aria-label="Search destination or service"
      />
      <div className="search-bar-icon">
        <img src={iconSearch} alt="icon search" className="search-bar-icon-search " />
      </div>
    </div>
  );
}
