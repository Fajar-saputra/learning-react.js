export default function Grade({nilaiLuu}) {
    return (
        <p>{nilaiLuu >= 90? "Sangat baik" : nilaiLuu >= 75? "Baik" : nilaiLuu >= 60? "Cukup" :  "Kurang"}</p>
    )
}