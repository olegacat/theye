import { useState, useEffect } from "react";
import styles from "./LoadingStage.module.css"; 
import FigmaMock from "../FigmaMock/FigmaMock";

export const LoadingStage = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 700) {
          clearInterval(interval);
          onFinish(); 
          return 700;
        }
        return prev + 1;  
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2>Loading...</h2>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>{progress}%</span>
        </div>
      </div> */}

      <FigmaMock/>
    </div>
  );
};
