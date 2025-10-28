"use client";

import React from "react";
import Image from "next/image";
import styles from "./FigmaMock.module.css";

// импорт картинок из текущей папки
import rightImg from "./right.jpg";
import leftImg from "./left.jpg";
import bottomImg from "./bottom.jpg";
import airpods from "@/assets/airpods.svg";
import LoadModal from "./LoadModal/LoadModal";

const FigmaMock = () => {
  return (
    <div className={styles.workspace}>
      {/* Левая панель */}
      <div className={styles.toolbarLeft}>
        <Image src={leftImg} alt="Left Panel" className={styles.panelImage} />
      </div>

      {/* Центральная область */}
      <div className={styles.canvas}>
             <div className={styles.canvas_item}>
               <div className={styles.frameText}>Frame</div>
        <Image
          src={airpods}
          alt="Central"
          className={styles.centerImage}
          priority
        />
       

  </div>
    <LoadModal/>
        {/* Нижний летающий тулбар */}
        <div className={styles.bottomBar}>
          <Image src={bottomImg} alt="Bottom Bar" className={styles.bottomImg} /> 
        </div>
      </div>

      {/* Правая панель */}
      <div className={styles.toolbarRight}>
                <Image src={rightImg} alt="Right Panel" className={styles.panelImage} />
      </div>
    </div>
  );
};

export default FigmaMock;
