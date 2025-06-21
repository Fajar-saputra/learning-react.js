import TourCard from "./TourCard";
import tourData from "./tourData";

export default function TourList() {
  return (
    <section className="tour-list container">
      <div className="tour-filters">
        <button className="btn-filter active">Harga</button>
        <button className="btn-filter">Rating</button>
        <button className="btn-filter">Rekomendasi</button>
        <button className="btn-filter">Ulasan</button>
        <button className="btn-filter">Promo</button>
      </div>

      <div className="tour-grid">
        {tourData.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            locationImg={tour.locationImg}
            price={tour.price}
            duration={tour.duration}
          />
        ))}
      </div>

      <div className="text-center my-ms">
        <button className="btn btn-primary">More views...</button>
      </div>
    </section>
  );
}
