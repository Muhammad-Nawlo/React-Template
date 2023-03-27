import "./Gallery.css";
const Gallery = ({ imgSrc }) => {
  return (
    <div className="tmp__gallery">
      <img src={imgSrc} alt="image gallery" />
    </div>
  );
};

export default Gallery;
