import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <section className="home">
      <div className="container">
        <div className="content-home">
          <h1 className="hero-heading text-center">Explore the World, Experience True Comfort</h1>
          <h2 className="hero-content text-center">From thrilling adventures to serene getaways, your perfect escape begins here</h2>
        </div>
        <SearchBar />
      </div>
    </section>
  );
}
