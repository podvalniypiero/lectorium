import React from "react";

import "../../Slider.module.scss";

export default function SlideImage({ src, alt }) {
  return <img src={src} alt={alt} className="slide-image" />;
}