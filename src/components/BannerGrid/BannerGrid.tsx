import Image from "next/image";
import LargeRectangle from "@/assets/optionResizeImages/LargeRectangle300x250px.svg";
import SmallSquare from "@/assets/optionResizeImages/SmallSquare300x300px.svg";
import Skyscraper from "@/assets/optionResizeImages/Skyscraper1200x300px.svg";

export const BannerGrid = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "31px",  
        margin: "0 auto",  
        height: "768px",
        width: "545px"
      }}
    >
      {/* Левая колонка */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "31px",
          flex: "1 1 0", 
        }}
      >
        <Image
          src={LargeRectangle}
          alt="Large Rectangle" 
        />
        <Image
          src={SmallSquare}
          alt="Small Square" 
        />
      </div>

      {/* Правая колонка */}
      <div style={{ flex: "1 1 0", display: "flex" }}>
        <Image
          src={Skyscraper}
          alt="Skyscraper"
          style={{
            width: "100%", 
            borderRadius: "12px",
            objectFit: "cover",
            
          }}
        />
      </div>
    </div>
  );
};
