export default function Status({ isStatus }) {
    return <h2> {isStatus == "loading" ? "Sedang memuat..." : isStatus === "success" ? "Data berhasil dimuat" : "Terjadi kesalahan"}</h2>;
}
