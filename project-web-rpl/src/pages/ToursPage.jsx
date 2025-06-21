import TourList from "../components/tour/TourList";
import SearchBar from "../components/SearchBar";

export default function ToursPage() {
    return (
        <section className="tours">
            <div className="section-heading">
                <h2>
                    Need some travel inspiration? <br />
                    Start your search and discover wonders around every corner
                </h2>

                <SearchBar />

                {/* <svg className="section-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <path
                        fill="#FFFDE0"
                        d="M0,128L48,128C96,128,192,128,288,122.7C384,117,480,107,576,90.7C672,75,768,53,864,48C960,43,1056,53,1152,64C1248,75,1344,85,1392,90.7L1440,96L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
                    ></path>
                </svg> */}
            </div>
            <div className="container">
                <TourList />
            </div>
        </section>
    );
}
