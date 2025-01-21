import pokeball from "../assets/pokeball.png";
import pokeball2 from "../assets/pokeball2.png";
import "../styles/components/Background.scss"

// Render the images 3 times each
const renderImages = (count: number) => {
const images = [];
for (let i = 0; i < count; i++) {
    images.push(<img key={`$pokeball-${i}`} src={i % 2 === 0 ? pokeball : pokeball2} alt="pokeball" />);
}
return images;
};

export const Background = () => {
    return <div className='background'>
        {renderImages(6)}
    </div>
}
