import iconSearch from "../assets/images/icons/iconSearch.png";

export default function SearchBar() {
  return (
    <div className="search-home">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="search-home-input"
        aria-label="Search destination or service"
      />
      <div className="icon">
        <img src={iconSearch} alt="icon search" className="icon-search" />
      </div>
    </div>
  );
}
