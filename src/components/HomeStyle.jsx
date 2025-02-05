import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "https://anchalfoodimg.imgix.net/image6.webp",
  "https://anchalfoodimg.imgix.net/image4.webp",
  "https://anchalfoodimg.imgix.net/image2.webp",
  "https://anchalfoodimg.imgix.net/image3.webp",
  "https://anchalfoodimg.imgix.net/image5.webp",
  "https://anchalfoodimg.imgix.net/image1.webp",
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

function HomeStyle() {
  return (
    <div
      className="slider-div"
      style={{
        width: "100vw",
        marginTop: "10px",
        position: "relative",
        height: "75vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          width: "100%",
        }}
      >
        <Slider {...settings}>
          {images.map((src, ind) => {
            return (
              <div key={ind}>
                <img
                  src={src}
                  alt={`Slide ${ind}`}
                  style={{
                    opacity: 0.4,
                    height: "75vh",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div
        style={{
          zIndex: 2,
          position: "relative",
          color: "red",
          fontFamily: "Montserrat, serif",
          padding: "10%",
          textAlign: "center",
          textShadow: "1px 1px 1px #000000",
          fontSize:"30px",
          fontWeight:"bolder",
        }}
      >
        <h1>
          No Ingredients
          <br />
          Wasted,
          <br />
          Just Meals Created.
        </h1>

      </div>
    </div>
  );
}

export default HomeStyle;
