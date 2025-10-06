import { useLayoutEffect, useState } from "react";
import { icons } from "@/utility/image";

// Static data for Scroll_velocity module
export const SCROLL_VELOCITY_DATA = [];


export function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

// Static data for Logo_Scroller module
export const marqueeData = {
  upper: [
    { url: icons.Aimtron, alt: "Aimtron - logo" },
    { url: icons.AyushmanHospital, alt: "Ayushman hospital - logo" },
    { url: icons.Biomatrix, alt: "Biomatrix - logo" },
    { url: icons.CelectivLLC, alt: "Celectiv LLC - logo" },
    { url: icons.GoldmanSachs, alt: "Goldman Sachs - logo" },
    { url: icons.LaTan, alt: "LaTan - logo" },
    { url: icons.peoplecubeai, alt: "people cube ai - logo" },
    { url: icons.Tenderdetail, alt: "Tenderdetail - logo" },
    { url: icons.UniversityofBirmingham, alt: "UniversityofBirmingham - logo" },
    { url: icons.VaruBeautyUK, alt: "VaruBeautyUK - logo" },
  ]
};