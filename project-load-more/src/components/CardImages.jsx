import { useState } from "react";
import listItem from "../data";

export default function CardImages() {
    const [showImages, setShowImages] = useState(3);

    const initialCount = 3;

    const handleShowMore = () => {
        setShowImages((count) => count + 3);
    };

    const handleLessMore = () => {
        setShowImages(initialCount);
    };

    return (
        <>
            <div className="box-more-load">
                {listItem.slice(0, showImages).map((item) => (
                    <div key={item.id}>
                        <img src={item.gambar} alt="images" />
                    </div>
                ))}
            </div>
            <div className="buttons">
                {showImages < listItem.length ? (
                    <button onClick={handleShowMore} className="btn-more-load">
                        More Load
                    </button>
                ) : (
                    <button onClick={handleLessMore} className="btn-more-load">
                        Less Load
                    </button>
                )}
            </div>
        </>
    );
}
