
import React from 'react';
import Image from 'next/image';
import styles from './LoadModal.module.css';

// Mock SVG imports - replace with actual paths if needed
import   CloseIcon   from './close.svg'; // Assuming you have a close icon SVG
import   FrameIcon   from './frame.svg'; // Assuming you have a frame icon SVG

const LoadModal = () => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton}>
    <Image
          src={CloseIcon}
          alt="Central"
          className={styles.CloseIcon} 
        />
        </button>
        <h2 className={styles.title}>Theye</h2>
        <div className={styles.frameSelection}> 
             <Image
          src={FrameIcon}
          alt="Central"
          className={styles.frameIcon} 
        />
          <p className={styles.frameText}>1 Frame selected</p>
        </div>
        <button className={styles.importButton}>Import</button>
      </div>
    </div>
  );
};

export default LoadModal;
