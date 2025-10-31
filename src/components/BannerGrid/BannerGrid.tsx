import styles from "./BannerGrid.module.css";
import LargeRectangle from "@/assets/optionResizeImages/LargeRectangle300x250px.svg";
import SmallSquare from "@/assets/optionResizeImages/SmallSquare300x300px.svg";
import Skyscraper from "@/assets/optionResizeImages/Skyscraper1200x300px.svg";
import { useEffect, useState } from "react";
import Icon from "@/icons/Icon";

import tallGif from "./tall.gif";
import smallGif from "./small.gif";
import largeGif from "./large.gif";
interface TBannerGrid {
  isAnimatingDesigns: boolean;
  setIsAnimatingDesigns: (bool: boolean) => void;
}

export const BannerGrid = ({
  isAnimatingDesigns,
  setIsAnimatingDesigns,
}: TBannerGrid) => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const [scale, setScale] = useState(0.9);
  const [animatedDesignsReady, setAnimatedDesignsReady] = useState(false);
  const [hoveredBanner, setHoveredBanner] = useState<string | null>(null);
 
  
  const gifImages = {
    large: largeGif.src,
    small:  smallGif.src,
    tall: tallGif.src,
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstMount(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const maxWidth = window.innerWidth;
      let ratio = 1;

      if (maxWidth < 1400) {
        const baseWidth = 545 + 28;
        ratio = Math.min(0.85, maxWidth / (baseWidth + 50));
      }

      setScale(ratio);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAnimatingDesigns) {
      setAnimatedDesignsReady(false);

      const timer = setTimeout(() => {
        setAnimatedDesignsReady(true);
        setIsAnimatingDesigns(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isAnimatingDesigns]);

  const getBackgroundImage = (
    defaultSrc: string,
    gifSrc: string,
    id: string
  ) => {  
    if (hoveredBanner === id && animatedDesignsReady) return `url(${gifSrc})`;
    if (!isFirstMount) return `url(${defaultSrc})`;
    return "none";
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top center",
      }}
    >
      {/* Левая колонка */}
      <div className={styles.leftColumn}>
        <div
          className={`${styles.item} ${styles.top} ${
            !isFirstMount && !isAnimatingDesigns ? styles.loaded : ""
          }`}
          onMouseEnter={() => setHoveredBanner("large")}
          onMouseLeave={() => setHoveredBanner(null)}
          style={{
            backgroundImage: getBackgroundImage(
              LargeRectangle.src,
              gifImages.large,
              "large"
            ),
          }}
        >
          {animatedDesignsReady && (
            <div className={styles.iconPlay}>
              <Icon name="PlayIconHover" />
            </div>
          )}
          <div className={styles.title}>Large Rectangle 427 × 317</div>
          {(isFirstMount || (isAnimatingDesigns && !animatedDesignsReady)) && (
            <div className={styles.loadingOverlay} />
          )}
        </div>

        <div
          className={`${styles.item} ${styles.bottom} ${
            !isFirstMount && !isAnimatingDesigns ? styles.loaded : ""
          }`}
          onMouseEnter={() => setHoveredBanner("small")}
          onMouseLeave={() => setHoveredBanner(null)}
          style={{
            height: "280px",
            backgroundImage: getBackgroundImage(
              SmallSquare.src,
              gifImages.small,
              "small"
            ),
          }}
        >
          {animatedDesignsReady && (
            <div className={styles.iconPlay}>
              <Icon name="PlayIconHover" />
            </div>
          )}
          <div className={styles.title}>Small Square 312 × 312</div>
          {(isFirstMount || (isAnimatingDesigns && !animatedDesignsReady)) && (
            <div className={styles.loadingOverlay} />
          )}
        </div>
      </div>

      {/* Правая колонка */}
      <div
        className={`${styles.item} ${
          !isFirstMount && !isAnimatingDesigns ? styles.loaded : ""
        }`}
        onMouseEnter={() => setHoveredBanner("tall")}
        onMouseLeave={() => setHoveredBanner(null)}
        style={{
          width: "180px",
          height: "700px",
          alignSelf: "center",
          backgroundImage: getBackgroundImage(
            Skyscraper.src,
            gifImages.tall,
            "tall"
          ),
        }}
      >
        {animatedDesignsReady && (
          <div className={styles.iconPlay}>
            <Icon name="PlayIconHover" />
          </div>
        )}
        <div className={styles.title}>Skyscraper 768 × 202</div>
        {(isFirstMount || (isAnimatingDesigns && !animatedDesignsReady)) && (
          <div className={styles.loadingOverlay} />
        )}
      </div>
    </div>
  );
};
