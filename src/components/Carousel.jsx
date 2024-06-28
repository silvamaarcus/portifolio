import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import icon_figma from "../assets/svg/figma.svg";
import icon_dev from "../assets/svg/dev-mode.svg";
import icon_delivery from "../assets/svg/delivery.svg";

const MyCarousel = () => (
  <ResponsiveCarousel
    autoPlay
    interval={2250}
    infiniteLoop
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    showArrows={false}
  >
    <div className="flex-center mt-1">
      <img src={icon_figma} alt="Figma" className="icon-hero" />
    </div>
    <div className="flex-center mt-1">
      <img src={icon_dev} alt="Desenvolvimento" className="icon-hero" />
    </div>
    <div className="flex-center mt-1">
      <img src={icon_delivery} alt="Entrega" className="icon-hero" />
    </div>
  </ResponsiveCarousel>
);

export default MyCarousel;
