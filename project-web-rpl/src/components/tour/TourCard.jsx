export default function TourCard({ title, locationImg, price, duration }) {
  return (
    <div className="tour-card">
      <img src={locationImg} alt={title} className="tour-img" />
      <div className="tour-body">
        <h3 className="tour-title">{title}</h3>
        <p className="tour-price">Rp. {price.toLocaleString("id-ID")},00</p>
        <p className="tour-duration">Lama Destinasi {duration} hari</p>
        <button className="btn btn-secondary">View details...</button>
      </div>
    </div>
  );
}
