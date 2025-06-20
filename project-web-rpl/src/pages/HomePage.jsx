import iconSearch  from "../assets/images/icons/iconSearch.png"

export default function HomePage() {
    return (
        <section className="home">
            <div className="container">
                <div className="content-home">
                    <h1 className="hero-heading">Explore the World, Experience True Comfort</h1>
                    <h2 className="hero-content">From thrilling adventures to serene getaways, your perfect escape begins here</h2>
                </div>
                <div className="search-home">
                    <input type="text" placeholder="Search..." className="search-home-input" />
                    <div className="icon">
                        <img src={iconSearch} alt="icon search" className="icon-search" />
                    </div>
                </div>
            </div>
        </section>
    );
}
