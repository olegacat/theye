"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./LoadModal.module.css";

import CloseIcon from "./close.svg";
import FrameIcon from "./frame.svg";

const LoadModal = ({ onFinish }) => {
  const [stage, setStage] = useState(0); // 0 = idle, 1 = loading, 2 = done
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    if (stage === 0) {
      // Автоматическое нажатие кнопки через 500мс
      const timer = setTimeout(() => {
        setButtonPressed(true);
        setStage(1);
      }, 2500);
      return () => clearTimeout(timer);
    }

    if (stage === 1) {
      // Показать загрузку 2 секунды
      const timer = setTimeout(() => {
        setStage(2);
      }, 6000);
      return () => clearTimeout(timer);
    }

    if (stage === 2) {
      // Финальная функция через 500мс после Done
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [stage, onFinish]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton}>
          <Image src={CloseIcon} alt="Close" className={styles.closeIcon} />
        </button>

           <div className={styles.modalContentChange}>
        <h2 className={styles.title}>Theye</h2>

        <div className={styles.frameSelection}>
          <Image src={FrameIcon} alt="Frame" className={styles.frameIcon} />
          <p className={styles.frameText}>1 Frame selected</p>
        </div>

        </div>

        <button
          className={`${styles.importButton} ${
            buttonPressed ? styles.pressed : ""
          }`}
        >
          {stage === 0 && "Import"}
          {stage === 1 && "Loading..."}
          {stage === 2 && "Done"}
        </button>
      </div>
    </div>
  );
};

export default LoadModal;