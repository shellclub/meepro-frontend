import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "./ZoomImage.css";

const ZoomImage = ({ src, alt }) => {
  return (
    <div>
      <InnerImageZoom
        src={src}
        zoomSrc={src}
        alt={alt}
        zoomType="hover"
        zoomPreload={true}
        style={{ cursor: "zoom-in" }}
        hideHint={false}
      />
    </div>
  );
};

export default ZoomImage;
