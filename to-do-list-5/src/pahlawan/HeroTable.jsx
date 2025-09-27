import { useEffect, useState } from "react";

function FilterHero({ heroText, setHeroText }) {
    return (
        <form action="" style={{ padding: ".6rem" }}>
            <input type="text" placeholder="birdh year..." value={heroText} onChange={(e) => setHeroText(e.target.value)} />
        </form>
    );
}

function HeroRow({ hero }) {
    return (
        <tr>
            <td>{hero.name}</td>
            <td>{hero.birth_year}</td>
            <td>{hero.death_year}</td>
            <td>{hero.ascension_year}</td>
        </tr>
    );
}

function HeroTable({ heros, filterText }) {
    const rows = [];

    heros.forEach((hero) => {
        if (hero.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        rows.push(<HeroRow hero={hero} key={hero.name} />);
    });

    return (
        <table border={"2"} cellSpacing={"5"}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birth Year</th>
                    <th>Death Year</th>
                    <th>Ascension Year</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default function HeroList() {
    const [heroText, setHeroText] = useState("");
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        fetch("../../public/Heros.json")
            .then((res) => res.json())
            .then((data) => setHeros(data))
            .catch(() => console.log("Gagal fetch"));
    }, []);

    return (
        <div>
            <h2>ini table pahlawan</h2>
            <FilterHero heroText={heroText} setHeroText={setHeroText} />
            <HeroTable heros={heros} filterText={heroText} />
        </div>
    );
}
